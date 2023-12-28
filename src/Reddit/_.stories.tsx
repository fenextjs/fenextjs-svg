import { Story, Meta } from "@storybook/react";

import { Reddit } from "./index";

export default {
    title: "Svg/Reddit",
    component: Reddit,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Reddit {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
