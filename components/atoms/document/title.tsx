import './title.scss';

interface TitleProps {
  children: React.ReactNode,
  className?: string,
  level?: '1' | '2' | '3' | '4' | '5',
}

/**
 * Element represent section headings
 */
const Title: React.FC<TitleProps> = ({ children, className = '', level = '1', size = 'xlarge' }) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;

    return (
        <Tag
            className={`title${level} ${className}`
                .replace(/\s+/g, ' ')
                .trim()}
        >
            {children}
        </Tag>
    );
};

export default Title;
