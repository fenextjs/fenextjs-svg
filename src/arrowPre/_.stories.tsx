import { Story, Meta } from "@storybook/react";

import { ArrowPre } from "./index";

export default {
    title: "Svg/ArrowPre",
    component: ArrowPre,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <ArrowPre {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
