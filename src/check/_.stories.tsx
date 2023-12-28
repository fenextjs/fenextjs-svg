import { Story, Meta } from "@storybook/react";

import { Check } from "./index";

export default {
    title: "Svg/Check",
    component: Check,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Check {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
