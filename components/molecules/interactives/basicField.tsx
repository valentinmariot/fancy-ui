import React, { forwardRef, Ref } from 'react';

import Label from 'components/atoms/form/label';
import InputText from '../../atoms/form/inputText';

import './basicField.scss';


export interface BasicFieldProps {
    /**
     * Autocomplete attribute to provide automated assistance in filling out form field values
     */
    autoComplete?: string;
    /**
     * To add some classes
     */
    className?: string;
    /**
     * Default Value of the field
     */
    defaultValue?: string | number;
    /**
     * Is the field disabled ?
     */
    disabled?: boolean;
    /**
     * Error visible
     */
    errorOpened?: boolean;
    /**
     * Error content
     */
    errorText?: React.ReactNode;
    /**
     * ID used for label pairing
     */
    id?: string;
    /**
     * The text for the label
     */
    label?: string;
    /**
     * Is the field loading ?
     */
    loading?: boolean;
    /**
     * Is the field locked ?
     */
    locked?: boolean;
    /**
     * Identifier
     */
    name: string;
    /**
     * Raised when an element loses focus
     */
    onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    /**
     * Triggered when field change
     */
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    /**
     * Placeholder for the input
     */
    placeholder?: string;
    /**
     * Is the field readOnly ?
     */
    readOnly?: boolean;
    /**
     * Is the field required ?
     */
    required?: boolean;
    /**
     * The right icon name, based on font
     */
    rightIcon?: string;
    /**
     * The state of the button (initial, alert, error, info, valid, primary)
     */
    state?: 'alert' | 'error' | 'info' | 'initial' | 'primary' | 'valid';
    /**
     * Indicates that its element can be focused
     */
    tabIndex?: number;
    /**
     * Type of text input (text, password, email, textarea, hidden)
     */
    type?: 'text' | 'password' | 'email' | 'textarea' | 'hidden';
    /**
     * Value of the field
     */
    value?: string | number;
  }

const BasicField = forwardRef<HTMLInputElement, BasicFieldProps>(
  (
    {
      autoComplete = 'off',
      className = '',
      defaultValue,
      disabled = false,
      id,
      label,
      loading = false,
      locked = false,
      name,
      onBlur = () => {},
      onChange = () => {},
      placeholder,
      readOnly = false,
      required = false,
      rightIcon = null,
      state = 'initial',
      type = 'text',
      value,
    },
  ) => (
    <div
      className={`
        field-text
        ${disabled ? 'field-text--disabled' : ''}
        ${locked ? 'field-text--locked' : ''}
        ${loading ? 'field-text--loading' : ''}
        ${rightIcon ? 'field-text--rightIcon' : ''}
        ${className}
      `
        .replace(/\s+/g, ' ')
        .trim()}
    >
      {label && (
        <Label className="field-text__label" htmlFor={id}>
          {label}
        </Label>
      )}
      <div className="field-text__elt">
        {loading && <div className="field-text__loading-bar" />}
        <InputText
          autoComplete={autoComplete}
          className={type === 'textarea' ? '' : 'field-text__input'}
          defaultValue={defaultValue}
          disabled={disabled}
          id={id}
          locked={locked}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          placeholder={placeholder}
          readOnly={readOnly}
          required={required}
          state={state}
          type={type}
          value={value}
        />
      </div>
    </div>
  ),
);

BasicField.displayName = 'BasicField';

export default BasicField;
