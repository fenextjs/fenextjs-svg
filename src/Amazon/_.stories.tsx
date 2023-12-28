import { Story, Meta } from "@storybook/react";

import { Amazon } from "./index";

export default {
    title: "Svg/Amazon",
    component: Amazon,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Amazon {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
