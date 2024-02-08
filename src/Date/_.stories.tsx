import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Date } from "./index";

export default {
    title: "Svg/Date",
    component: Date,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Date {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
