import { Meta } from '@storybook/react';
import Button, { ButtonProps } from '../../../components/atoms/form/button';

export default {
    title: 'Atoms/Forms/Button',
    component: Button,
    argTypes: {
        children: {
            control: {
                type: 'text',
            },
        },
        title: {
            control: {
                type: 'text',
            },
        },
        type: {
            control: false,
        },
        className: {
            control: false,
        },
        onClick: {
            control: false,
        },
    },
} as Meta;

const TemplatePlayground = (args: ButtonProps) => <Button {...args} />;

export const Playground = TemplatePlayground.bind({});
