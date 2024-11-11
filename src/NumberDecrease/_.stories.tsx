import React from 'react'
import { Story, Meta } from "@storybook/react";

import { SvgNumberDecrease } from "./index";

export default {
    title: "Svg/SvgNumberDecrease",
    component: SvgNumberDecrease,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <SvgNumberDecrease {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
