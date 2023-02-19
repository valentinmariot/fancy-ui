import { Meta } from '@storybook/react';
import Button, { ButtonProps } from '../../../components/atoms/form/button';
import BasicIcon from 'components/atoms/embed/basicIcon';

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

const TemplatePlayground = (args: ButtonProps) => 
    <div>
    <Button {...args} />
    <BasicIcon name="ico-arrow-right" />
    </div>;

export const Playground = TemplatePlayground.bind({});
