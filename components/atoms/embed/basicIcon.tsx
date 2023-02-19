import React, { FC } from 'react';

import './basicIcon.scss';

interface BasicIconProps {
    name: string;
    size?: 'small' | 'medium' | 'large' | 'xlarge';
    color?: 'primary' | 'secondary' | 'white' | 'black' | 'tertiary' | 'valid' | 'alert' | 'info' | 'error' | 'auto';
    boxColor?: 'primary' | 'secondary' | 'white' | 'black' | 'tertiary' | 'valid' | 'alert' | 'info' | 'error' | '';
    onClick?: () => void;
    className?: string;
}

const BasicIcon: FC<BasicIconProps> = ({ name, size = 'medium', color = 'auto', boxColor = '', onClick = () => {}, className = '' }) => {
    const classes = `
        bIcon bIcon--${name}
        bIcon--${size}
        bIcon--${color}
        ${className}
        ${boxColor ? `bIcon--box bIcon--box-${boxColor}` : ''}
    `
        .replace(/\s+/g, ' ')
        .trim();

    return (
        <div
            className={classes}
            onClick={onClick}
            tabIndex={-1}
            role="figure"
            aria-label={name}
            aria-hidden
        />
    );
};

export default BasicIcon;
