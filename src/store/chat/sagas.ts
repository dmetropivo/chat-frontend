import { ActionPattern, call, fork, put, take } from 'redux-saga/effects';
import { END, eventChannel } from 'redux-saga';
import { EStatus, putMessage, putStatusMessage, setChatList } from './action';

export function webSocketListener(serviceWebSocket: WebSocket) {
  return eventChannel((emitter) => {
    serviceWebSocket.onmessage = ({ data }: MessageEvent) => emitter(data);
    serviceWebSocket.onclose = () => emitter(END);
    serviceWebSocket.onerror = () => emitter(END);
    return () => serviceWebSocket.close();
  });
}

export function* webSocketSaga(): Generator {
  try {
    // start websocket and channel
    const serviceWebSocket = new WebSocket('ws://localhost:4000');
    const socket = yield call(webSocketListener, serviceWebSocket);

    yield put(putStatusMessage(EStatus.connected));
    yield fork(sendMessageSaga, serviceWebSocket);

    // subscribe to channel
    while (true) {
      const payload = yield take(
        socket as ActionPattern,
      );
      console.log('PAYLOAD  ActionPattern==>>>', payload)
      // @ts-ignore
      const parsedPayload = JSON.parse(payload)

      switch (parsedPayload.event) {
        case 'message':
          yield put(putMessage(parsedPayload.data));
          break;
        case 'getChats':
          yield put(setChatList(parsedPayload.data));
      }

    }
  } finally {
    yield put(putStatusMessage(EStatus.connected));
  }
}

export function* sendMessageSaga(serviceWebSocket: WebSocket) {
  while (true) {
    const { payload } = yield take('SEND_MESSAGE');
    try {
      yield call([serviceWebSocket, 'send'], JSON.stringify(payload));
    } catch (error) {
      yield put(
        putMessage({
          name: payload.name,
          message: 'Error message',
          chatID: payload.chatID,
        }),
      );
    }
  }
}
