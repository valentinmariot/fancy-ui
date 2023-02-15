import { Meta }  from '@storybook/react';
import Button from '../../../components/atoms/forms/button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Atoms/Forms',
  component: Button,
  parameters: {
    docs: {
      page: null,
    },
  },
} as Meta;

export const ButtonStory = () => <Button>Hello</Button>
