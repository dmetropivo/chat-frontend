export interface IMessages {
  name: string;
  message: string;
}

export  interface IMessagePayload extends IMessages{
  chatID: number;
  history?: IMessages[];
}

export interface IChats {
  [key: number]: IMessages[];
}

export interface IMessageActionType {
  type: string;
  payload: IMessagePayload;
}

export interface IItemListChat {
  name: string;
  id: number;
}

export interface IInitialState {
  chats: IChats;
  chatListIds: IItemListChat[],
}