import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Exclamation } from "./index";

export default {
    title: "Svg/Exclamation",
    component: Exclamation,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Exclamation {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
