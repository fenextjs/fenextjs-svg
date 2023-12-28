import { Story, Meta } from "@storybook/react";

import { Star } from "./index";

export default {
    title: "Svg/Star",
    component: Star,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Star {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
