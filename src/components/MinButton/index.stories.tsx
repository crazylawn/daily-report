import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MinButton } from '.';
export default {
  title: 'Example/MinButton',
  component: MinButton,
} as ComponentMeta<typeof MinButton>;

const Template: ComponentStory<typeof MinButton> = (args) => (
  <MinButton {...args} /> //args  story의 props 이자 input
);
