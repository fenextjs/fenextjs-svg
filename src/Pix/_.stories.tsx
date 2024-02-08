import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Pix } from "./index";

export default {
    title: "Svg/Pix",
    component: Pix,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Pix {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
