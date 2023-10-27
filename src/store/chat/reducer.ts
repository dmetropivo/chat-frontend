import { PUT_MESSAGE, PUT_STATUS_MESSAGE, SET_CHAT_LIST } from './action';
import { IInitialState, IMessageActionType } from '../../utils/interfaceAndTypes';

export const initialState: IInitialState = {
  chats: {},
  chatListIds: [],
}

export default function chatReducer(
  state: IInitialState = initialState,
  action: IMessageActionType,
) {
  switch (action.type) {
    case PUT_MESSAGE:
      return {
        ...state,
        chats: {
          ...state.chats,
          [action.payload.chatID]: [
            ...(state?.chats?.[action.payload.chatID] || []),
            ...[{ name: action.payload.name, message: action.payload.message }],
          ],
        },
      };
    case PUT_STATUS_MESSAGE:
      return {
        ...state,
        status: action.payload,
      };
    case SET_CHAT_LIST:
      const chatsObject = {}
      // @ts-ignore
      action.payload.forEach((item) => {
        // @ts-ignore
        chatsObject[item.id] = item.history
      })

      return {
        ...state,
        chats: chatsObject,
        chatListIds: action.payload,
      }
    default:
      return state;
  }
}