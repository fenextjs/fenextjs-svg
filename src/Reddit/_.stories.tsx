import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Reddit } from "./index";

export default {
    title: "Svg/Reddit",
    component: Reddit,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Reddit {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
