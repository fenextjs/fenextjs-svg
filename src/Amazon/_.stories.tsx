import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Amazon } from "./index";

export default {
    title: "Svg/Amazon",
    component: Amazon,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Amazon {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
