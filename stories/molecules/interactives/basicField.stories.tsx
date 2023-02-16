import React from 'react';

import BasicField, { BasicFieldProps } from '../../../components/molecules/interactives/basicField';

export default {
    title: 'Interactive/Inputs/BasicField',
    component: BasicField,
    argTypes: {
        type: {
            control: {
                type: 'radio',
            },
        },
        placeholder: {
            control: {
                type: 'text',
            },
        },
        label: {
            control: {
                type: 'text',
            },
        },
        state: {
            control: {
                type: 'radio',
            },
        },
        errorText: {
            control: {
                type: 'text',
            },
        },
        errorOpened: {
            control: {
                type: 'boolean',
            },
        },
        rightIcon: {
            control: {
                type: 'text',
            },
        },
        required: {
            control: {
                type: 'boolean',
            },
        },
        disabled: {
            control: {
                type: 'boolean',
            },
        },
        locked: {
            control: {
                type: 'boolean',
            },
        },
        loading: {
            control: {
                type: 'boolean',
            },
        },
        autoComplete: {
            control: {
                type: 'text',
            },
        },
    },
    args: {
        autoComplete: 'off',
        disabled: false,
        errorOpened: false,
        errorText: '',
        label: '',
        loading: false,
        locked: false,
        placeholder: '',
        required: false,
        rightIcon: '',
        state: 'initial',
        type: 'text',
    },
};

const InputPlayGround = (args: BasicFieldProps) => {
    return <BasicField {...args} />;
};

export const Playground = InputPlayGround.bind({});
