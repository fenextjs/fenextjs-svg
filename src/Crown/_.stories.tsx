import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Crown } from "./index";

export default {
    title: "Svg/Crown",
    component: Crown,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Crown {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
