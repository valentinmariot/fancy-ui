import { forwardRef, ForwardedRef, InputHTMLAttributes } from 'react';
import './inputText.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    locked?: boolean;
    state?: 'initial' | 'alert' | 'error' | 'valid' | 'info' | 'primary';
}

const InputText = forwardRef(
    (
        {
            autoComplete,
            defaultValue,
            disabled,
            id,
            locked,
            name,
            onBlur,
            onChange,
            placeholder,
            readOnly,
            required,
            state = 'initial',
            tabIndex,
            type = 'text',
            value,
        }: Props,
        ref: ForwardedRef<HTMLInputElement>
    ) => {
        const classes = `input-text input-text--${state}
    `
            .replace(/\s+/g, ' ')
            .trim();

        return (
            <input
                autoComplete={autoComplete}
                className={classes}
                defaultValue={defaultValue}
                disabled={disabled}
                id={id}
                name={name}
                onBlur={onBlur}
                onChange={onChange}
                placeholder={placeholder}
                readOnly={readOnly || locked}
                ref={ref}
                required={required}
                tabIndex={tabIndex}
                type={type}
                value={value}
            />
        );
    },
);

InputText.displayName = 'InputText';

export default InputText;
