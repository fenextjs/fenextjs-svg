import React from 'react'
import { Story, Meta } from "@storybook/react";

import { SvgCopy } from "./index";

export default {
    title: "Svg/Copy",
    component: SvgCopy,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <SvgCopy {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
