import './Chat.scss';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatContent from './ChatContent/ChatContent';
import ChatForm from './ChatForm/ChatForm';

interface IChat {
  title?: string;
}

const Chat: FC<IChat> = ({title}) => {
  const navigate = useNavigate();
  return (
    <div className={'chatContainer'}>
      <div className={'chatHeader'}>
        <button className={'button primary'} onClick={() => navigate(-1)}>BACK</button>
        <p>Chat id: {title}</p>
      </div>
      <ChatContent />
      <ChatForm />
    </div>
  )
}

export default Chat;