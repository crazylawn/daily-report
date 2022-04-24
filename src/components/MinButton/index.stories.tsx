import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MinButton } from '.';
export default {
  title: 'Example/MinButton', //스토리북 폴더 걔층구조
  component: MinButton, //옵셔널이지만 addon을 위해 써주는게 권장
} as ComponentMeta<typeof MinButton>;

const Template: ComponentStory<typeof MinButton> = (args) => (
  <MinButton {...args} /> //args  story의 props 이자 input
);
export const one = Template.bind({});
one.args = { primary: true, label: '커피' };
export const two = Template.bind({});
two.args = { ...one.args, label: '😄👍😍💯' };

//Template.bind({}) 구문을 통해 만들어진 Template 이라는 기본적인 틀,
//즉 템플릿을 만들면 거기에 args를 할당할 수 있게 되고,
//Template로 만든 story에 args만 다르게 해서 여러개의 story를 렌더링 할 수 있다.
