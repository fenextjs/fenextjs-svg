import React from 'react'
import { Story, Meta } from "@storybook/react";

import { ArrowNext } from "./index";

export default {
    title: "Svg/ArrowNext",
    component: ArrowNext,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <ArrowNext {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
