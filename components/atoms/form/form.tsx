import React, { forwardRef, ForwardedRef, FormHTMLAttributes } from 'react';

interface Props extends FormHTMLAttributes<HTMLFormElement> {
    children: React.ReactNode;
    className?: string;
}

const Form = forwardRef(
    (
        {
            children,
            className = '',
            method = 'post',
            onBlur = () => {},
            onChange = () => {},
            onSubmit = () => {},
            ...rest
        }: Props,
        ref: ForwardedRef<HTMLFormElement>
    ) => (
        <form
            ref={ref}
            className={`form ${className}`}
            method={method}
            onSubmit={onSubmit}
            onChange={onChange}
            onBlur={onBlur}
            {...rest}
        >
            {children}
        </form>
    ),
);

Form.displayName = 'Form';

export default Form;
