import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Border } from "./index";

export default {
    title: "Svg/Border",
    component: Border,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Border {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
