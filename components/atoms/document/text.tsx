import React from 'react';
import PropTypes from 'prop-types';

import './text.scss';

interface TextProps {
    /**
     * The text to display
     */
    children: React.ReactNode;
    /**
     * To add some classes
     */
    className?: string;
    /**
     * Loading state to the text
     */
    loading?: boolean;
    /**
     * Text representing advisory information
     */
    title?: string;
}

/**
 * Represents a paragraph
 */
const Text: React.FC<TextProps> = ({ loading, children, className, title }) => (
    <p
        className={`a-text
        ${className}
        ${loading ? 'a-text--loading' : ''}`
            .replace(/\s+/g, ' ')
            .trim()}
        title={title}
    >
        {children}
    </p>
);

export default Text;
