import React from 'react'
import { Story, Meta } from "@storybook/react";

import { SvgLoader } from "./index";

export default {
    title: "Svg/Loader",
    component: SvgLoader,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <SvgLoader {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
