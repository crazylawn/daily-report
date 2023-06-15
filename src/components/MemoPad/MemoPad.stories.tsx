import { ComponentStory, ComponentMeta } from '@storybook/react';
import MemoPad from '.';

export default {
  title: 'Example/MemoPad',
  component: MemoPad,
} as ComponentMeta<typeof MemoPad>;

const Template: ComponentStory<typeof MemoPad> = (args) => (
  <MemoPad {...args} />
);
export const one = Template.bind({});
one.args = {
  bg: '#FFBDAE',
  content: '오늘 메인 페이지 드래그앤드롭 끝내기',
};
export const two = Template.bind({});
two.args = {
  bg: '#FFC470',
  content:
    'google 로그인 붙이고 유효성 처리까지하기! 만약 맨처음에 카카오로그인 했으면 중복 이메일 방지!',
};
export const three = Template.bind({});
three.args = {
  bg: '#FFC470',
  content: '메모지 crud 작업하기',
};

