import './label.scss';

type LabelProps = {
    /**
     * Additional classes
     */
    className?: string;
    /**
     * The id of a labelable form-related element
     */
    htmlFor?: string;
    /**
     * The content of the label
     */
    children: React.ReactNode;
    /**
     * Event when mouse enters the label
     */
    onMouseEnter?: (event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void;
    /**
     * Event when mouse leaves the label
     */
    onMouseLeave?: (event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void;
    /**
     * Indicates that its element can be focused
     */
    tabIndex?: number;
};

/**
 * Enclosing label element
 */
const Label = ({
    className = '',
    htmlFor,
    children,
    tabIndex,
    onMouseEnter = () => {},
    onMouseLeave = () => {},
}: LabelProps) => (
    <label
        // TODO : Remove "s-" when no more old nuage buttons
        className={`s-label ${className}`}
        htmlFor={htmlFor}
        tabIndex={tabIndex}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
    >
        {children}
    </label>
);

export default Label;
