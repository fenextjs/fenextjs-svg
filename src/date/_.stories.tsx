import { Story, Meta } from "@storybook/react";

import { Date } from "./index";

export default {
    title: "Svg/Date",
    component: Date,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Date {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
