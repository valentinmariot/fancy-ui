import { NavLink, NavLinkProps } from 'react-router-dom';

import './a.scss';

interface AProps extends NavLinkProps {
  className?: string,
  children: React.ReactNode,
  underline?: boolean,
  link?: string,
}

const A: React.FC<AProps> = ({ className = '', children, underline = false, link = '#' }) => {
    const classes = `a-a ${underline ? 'a-a--ul' : ''} ${className}`.trim();

    if (NavLink) {
        return (
            <NavLink
                className={classes}
                onClick={(e) => {
                    e.stopPropagation();
                }}
                to={link}
            >
                {children}
            </NavLink>
        );
    }

    return (
        <a
            className={classes}
            onClick={(e) => {
                e.stopPropagation();
            }}
            href={link}
        >
            {children}
        </a>
    );
};

export default A;
