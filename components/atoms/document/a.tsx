import './a.scss';

export interface AProps {
  className?: string,
  children: React.ReactNode,
  underline?: boolean,
  link?: string,
}

const A: React.FC<AProps> = ({
    className = '',
    children = 'link to',
    underline = false,
    link = '#'
}) => {
    const classes = `a-a ${underline ? 'a-a--ul' : ''} ${className}`.trim();

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
