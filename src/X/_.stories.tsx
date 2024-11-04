import React from 'react'
import { Story, Meta } from "@storybook/react";

import { X } from "./index";

export default {
    title: "Svg/X",
    component: X,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <X {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
