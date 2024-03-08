import React from 'react'
import { Story, Meta } from "@storybook/react";

import { SVGNumberIncrease } from "./index";

export default {
    title: "Svg/SVGNumberIncrease",
    component: SVGNumberIncrease,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <SVGNumberIncrease {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
