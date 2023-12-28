import { Story, Meta } from "@storybook/react";

import { Business } from "./index";

export default {
    title: "Svg/Business",
    component: Business,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Business {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};


