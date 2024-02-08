import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Business } from "./index";

export default {
    title: "Svg/Business",
    component: Business,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Business {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};


