import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Padlock } from "./index";

export default {
    title: "Svg/Padlock",
    component: Padlock,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Padlock {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
