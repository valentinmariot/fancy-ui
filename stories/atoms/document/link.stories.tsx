import { Meta } from '@storybook/react';
import Link, { AProps } from "../../../components/atoms/document/link";

export default {
    title: "Atoms/Document/Link",
    component: Link,
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

const TemplatePlayground = (args:AProps) => <Link {...args} />;

export const Playground = TemplatePlayground.bind({});

