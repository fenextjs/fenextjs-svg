import React from 'react'
import { Story, Meta } from "@storybook/react";

import { SvgCancel } from "./index";

export default {
    title: "Svg/Cancel",
    component: SvgCancel,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <SvgCancel {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
