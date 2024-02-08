import React from 'react'
import { Story, Meta } from "@storybook/react";

import { ArrowCollapse } from "./index";

export default {
    title: "Svg/ArrowCollapse",
    component: ArrowCollapse,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <ArrowCollapse {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
