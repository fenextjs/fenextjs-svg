import { Story, Meta } from "@storybook/react";

import { Padlock } from "./index";

export default {
    title: "Svg/Padlock",
    component: Padlock,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Padlock {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
