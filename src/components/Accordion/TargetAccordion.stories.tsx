import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TargetAccordion } from './TargetAccordion';

export default {
  title: 'Example/Accordion', //스토리북 폴더 걔층구조
  component: TargetAccordion, //옵셔널이지만 addon을 위해 써주는게 권장
} as ComponentMeta<typeof TargetAccordion>;

//   const Template: ComponentStory<typeof Accordion> = (args) => (
//     <Accordion {...args} /> //args  story의 props 이자 input
//   );
