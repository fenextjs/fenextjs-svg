import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Star } from "./index";

export default {
    title: "Svg/Star",
    component: Star,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Star {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
