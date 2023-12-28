import { Story, Meta } from "@storybook/react";

import { ArrowNext } from "./index";

export default {
    title: "Svg/ArrowNext",
    component: ArrowNext,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <ArrowNext {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
