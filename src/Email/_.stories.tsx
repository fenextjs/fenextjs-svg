import { Story, Meta } from "@storybook/react";

import { Email } from "./index";

export default {
    title: "Svg/Email",
    component: Email,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Email {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
