import { useParams } from 'react-router-dom';
import Chat from '../Chat/Chat';

const ChatPage = () => {
  const { chatId } = useParams();

  return (
    <div className={'pageContainer'}>
      <Chat
        title={chatId}
      />
    </div>

  )
};

export default ChatPage;