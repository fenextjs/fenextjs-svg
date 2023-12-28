import { Story, Meta } from "@storybook/react";

import { Visa } from "./index";

export default {
    title: "Svg/Visa",
    component: Visa,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Visa {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
