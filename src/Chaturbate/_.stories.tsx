import { Story, Meta } from "@storybook/react";

import { Chaturbate } from "./index";

export default {
    title: "Svg/Chaturbate",
    component: Chaturbate,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Chaturbate {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
