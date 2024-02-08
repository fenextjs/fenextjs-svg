import React from 'react'
import { Story, Meta } from "@storybook/react";

import { ArrowSelect } from "./index";

export default {
    title: "Svg/ArrowSelect",
    component: ArrowSelect,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <ArrowSelect {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
