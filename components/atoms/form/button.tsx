import { FC } from 'react';

import './button.scss';

export interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    params?: string[];
    tabIndex?: number;
    title?: string | undefined;
    type: "button" | "submit" | "reset";
}

const Button: FC<ButtonProps> = ({
    children = 'Test me',
    className = '',
    id,
    onClick = () => {},
    onMouseEnter = () => {},
    onMouseLeave = () => {},
    params = [],
    tabIndex = 0,
    title = '',
    type,
}) => {
    let classes = 'btn';
    for (let i = 0; i < params.length; i += 1) {
        const param = params[i];
        classes += ` btn--${param}`;
    }
    classes += ` ${className}`;
    classes = classes.trim();

    return (
        <button
            id={id}
            className={classes}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            type={type}
            title={title}
            tabIndex={tabIndex}
        >
            {children}
        </button>
    );
};

export default Button;