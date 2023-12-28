import { Story, Meta } from "@storybook/react";

import { Brush } from "./index";

export default {
    title: "Svg/Brush",
    component: Brush,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Brush {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
