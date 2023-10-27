import { FC } from 'react';
import './MessageSquare.scss'

interface IMessageSquare {
  name: string;
  message: string;
}

const MessageSquare: FC<IMessageSquare> = ({name, message}) => {
  return (
    <div className={'messageSquare'}>
      <p>{name}</p>
      <p>{message}</p>
    </div>
  )
}

export default MessageSquare;