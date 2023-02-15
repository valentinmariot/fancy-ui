import { FC } from 'react';

interface IButton {
  children: string;
}

const Button:FC<IButton> = ({children}) => {
  return (
    <button>{children}</button>
  )
};

export default Button;
