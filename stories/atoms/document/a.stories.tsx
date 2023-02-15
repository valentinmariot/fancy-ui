import { Meta } from '@storybook/react';
import A, { AProps } from "../../../components/atoms/document/a";

export default {
    title: "Atoms/Document/A",
    component: A,
    argTypes: {
        className: {
            control: {
                type: "text"
            }
        },
        children: {
            control: {
                type: "text"
            }
        },
        underline: {
            control: {
                type: "boolean"
            }
        },
        link: {
            control: {
                type: "text"
            }
        },
    }
} as Meta;

const TemplatePlayground = (args:AProps) => <A {...args} />;

export const Playground = TemplatePlayground.bind({});

