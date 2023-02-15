import './title.scss';

interface TitleProps {
  children: React.ReactNode,
  className?: string,
  level?: '1' | '2' | '3' | '4' | '5',
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'
}

/**
 * Element represent section headings
 */
const Title: React.FC<TitleProps> = ({ children, className = '', level = '2', size = 'xlarge' }) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;

    return (
        <Tag
            className={`a-title a-title--${size} ${className}`
                .replace(/\s+/g, ' ')
                .trim()}
        >
            {children}
        </Tag>
    );
};

export default Title;
