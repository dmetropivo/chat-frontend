import { IItemListChat, IMessagePayload } from '../../utils/interfaceAndTypes';

export enum EStatus {
  connected,
  disconnected,
}

export const PUT_MESSAGE = 'PUT_MESSAGE'
export const PUT_STATUS_MESSAGE = 'PUT_STATUS_MESSAGE'
export const SEND_MESSAGE = 'SEND_MESSAGE'
export const SET_CHAT_LIST = 'SET_CHAT_LIST'

export const putMessage = (payload: IMessagePayload) => {
  console.log('ACTION PUT MESSAGE ==>>>', payload)
  return { type: PUT_MESSAGE, payload };
}

export const putStatusMessage = (payload: EStatus) => {
  return { type: PUT_STATUS_MESSAGE, payload };
}

export const sendMessage = (payload: IMessagePayload) => {
  return {type: SEND_MESSAGE, payload}
}

export const setChatList = (payload: IItemListChat) => {
  return {type: SET_CHAT_LIST, payload}
}