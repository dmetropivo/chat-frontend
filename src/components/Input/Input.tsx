import { FC } from 'react';
import './Input.scss'

interface IInput {
  name?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  className?: string;
  onChange?: any;
  id?: string;
  error?: string;
}

const Input: FC<IInput> = ({
  name,
  type = 'text',
  value = '',
  placeholder,
  onChange,
  className,
  id,
  error
}) => {

  return (
    <div className={`containerInput ${className} ${error ? 'error' : ''}`}>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      { !!error && error?.length ? <div className={'helperText'}>{error}</div> : <div />}
    </div>
  );
}

export default Input;





