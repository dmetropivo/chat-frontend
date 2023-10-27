import { Link } from 'react-router-dom';
import { mockChats } from '../../mock/mockChats';
import './HomePage.scss';
import { useSelector } from 'react-redux';
import { IItemListChat } from '../../utils/interfaceAndTypes';

const HomePage = () => {

  // @ts-ignore
  const chats = useSelector((state) =>  state.chat.chatListIds)

  return (
    <div className={'homePage'}>
      <div className={'listWrapper'}>
        {chats.length !== 0 ? chats?.map((item: IItemListChat) => (
          <Link className={'linkButton'} key={item.id} to={`chat/${item.id}`}>
            {item.name}
          </Link>
        )) : <h1 style={{color: '#FFFFFF'}}>Please run websocket server :)</h1>}
      </div>
    </div>
  )
}

export default HomePage;