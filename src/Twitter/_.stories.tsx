import { Story, Meta } from "@storybook/react";

import { Twitter } from "./index";

export default {
    title: "Svg/Twitter",
    component: Twitter,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Twitter {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
