import React, { forwardRef } from 'react';

import './textarea.scss';

interface TextareaProps {
  className?: string,
  defaultValue?: string,
  disabled?: boolean,
  id?: string,
  name: string,
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>,
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>,
  placeholder?: string,
  readOnly?: boolean,
  required?: boolean,
  state?: 'alert' | 'error' | 'info' | 'initial' | 'primary' | 'valid',
}

/**
 * Represents a multi-line plain-text editing control
 */
const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    (
        {
            className = '',
            defaultValue,
            disabled,
            id,
            name,
            onBlur,
            onChange,
            placeholder,
            readOnly,
            required,
            state = 'initial',
        },
        ref,
    ) => {
        const classes = `nua-textarea nua-textarea--${state} ${className}`
            .replace(/\s+/g, ' ')
            .trim();

        return (
            <textarea
                className={classes}
                defaultValue={defaultValue}
                disabled={disabled}
                id={id}
                name={name}
                onBlur={onBlur}
                onChange={onChange}
                placeholder={placeholder}
                readOnly={readOnly}
                ref={ref}
                required={required}
            />
        );
    },
);

export default Textarea;
