import './ChatContent.scss';
import MessageSquare from '../MessageSquare/MessageSquare';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/storeHooks';

const ChatContent = () => {
  const { chatId } = useParams();
  // @ts-ignore
  const messagesList = useAppSelector((state) => state.chat.chats[chatId]);

  return (
  <div className={'chatContentContainer'}>
    {!!messagesList && messagesList?.length !== 0 ? messagesList?.map((item: any, index: any) => (
          <MessageSquare key={index} name={item.name} message={item.message} />
    )) : <p>MO MESSAGE</p>}
  </div>
  )
};

export default ChatContent;
