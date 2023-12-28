import { Story, Meta } from "@storybook/react";

import { Crown } from "./index";

export default {
    title: "Svg/Crown",
    component: Crown,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Crown {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
