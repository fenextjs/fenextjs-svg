import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Qr } from "./index";

export default {
    title: "Svg/Qr",
    component: Qr,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Qr {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
