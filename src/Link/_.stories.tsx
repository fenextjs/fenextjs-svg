import React from 'react'
import { Story, Meta } from "@storybook/react";

import { SvgLink } from "./index";

export default {
    title: "Svg/Link",
    component: SvgLink,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <SvgLink {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
