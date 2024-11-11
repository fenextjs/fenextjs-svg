import React from 'react'
import { Story, Meta } from "@storybook/react";

import { SvgVisa } from "./index";

export default {
    title: "Svg/SvgVisa",
    component: SvgVisa,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <SvgVisa {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
