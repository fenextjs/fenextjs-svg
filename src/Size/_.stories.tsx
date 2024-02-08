import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Size } from "./index";

export default {
    title: "Svg/Size",
    component: Size,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Size {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
