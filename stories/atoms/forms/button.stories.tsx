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
const TemplatePrimary = (args: ButtonProps) => <Button {...args} className='btn--primary'>Lorem ipsum</Button>;
const TemplateSecondary= (args: ButtonProps) => <Button {...args} className='btn--secondary' >Lorem ipsum</Button>;
const TemplateDestructive = (args: ButtonProps) => <Button {...args} className='btn--destructive'>Lorem ipsum</Button>;
const TemplateDisabled = (args: ButtonProps) => <Button {...args} className='btn--disabled'>Lorem ipsum</Button>;

export const Playground = TemplatePlayground.bind({});
export const Primary = TemplatePrimary.bind({});
export const Secondary= TemplateSecondary.bind({});
export const Destructive = TemplateDestructive.bind({});
export const Disabled = TemplateDisabled.bind({});
