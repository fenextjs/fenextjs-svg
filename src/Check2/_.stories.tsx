import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Check2 } from "./index";

export default {
    title: "Svg/Check2",
    component: Check2,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Check2 {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
