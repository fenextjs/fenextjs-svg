import React from 'react'
import { Story, Meta } from "@storybook/react";

import { SvgTheme } from "./index";

export default {
    title: "Svg/Theme",
    component: SvgTheme,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <SvgTheme {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
