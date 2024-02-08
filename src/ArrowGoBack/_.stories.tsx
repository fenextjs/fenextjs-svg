import React from 'react'
import { Story, Meta } from "@storybook/react";

import { ArrowGoBack } from "./index";

export default {
    title: "Svg/ArrowGoBack",
    component: ArrowGoBack,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <ArrowGoBack {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
