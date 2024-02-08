import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Desktop } from "./index";

export default {
    title: "Svg/Desktop",
    component: Desktop,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Desktop {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
