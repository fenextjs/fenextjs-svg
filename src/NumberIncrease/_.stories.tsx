import React from 'react'
import { Story, Meta } from "@storybook/react";

import { SvgNumberIncrease } from "./index";

export default {
    title: "Svg/SVGNumberIncrease",
    component: SvgNumberIncrease,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <SvgNumberIncrease {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
