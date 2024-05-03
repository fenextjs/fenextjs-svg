import React from 'react'
import { Story, Meta } from "@storybook/react";

import { SvgShare } from "./index";

export default {
    title: "Svg/Share",
    component: SvgShare,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <SvgShare {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
