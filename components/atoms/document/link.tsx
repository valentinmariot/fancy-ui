import './link.scss';

export interface LinkProps {
  className?: string,
  children: React.ReactNode,
  underline?: boolean,
  link?: string,
}

const Link: React.FC<LinkProps> = ({
    className = '',
    children = 'link to',
    underline = false,
    link = '#'
}) => {
    const classes = `link-a ${underline ? 'link-a--ul' : ''} ${className}`.trim();

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

export default Link;
