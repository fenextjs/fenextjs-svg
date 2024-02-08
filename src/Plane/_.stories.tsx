import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Plane } from "./index";

export default {
    title: "Svg/Plane",
    component: Plane,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Plane {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
