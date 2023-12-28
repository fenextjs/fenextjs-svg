import { Story, Meta } from "@storybook/react";

import { Border } from "./index";

export default {
    title: "Svg/Border",
    component: Border,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Border {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
