import React from 'react'
import { Story, Meta } from "@storybook/react";

import { ArrowPre } from "./index";

export default {
    title: "Svg/ArrowPre",
    component: ArrowPre,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <ArrowPre {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
