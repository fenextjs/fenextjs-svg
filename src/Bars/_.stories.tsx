import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Bars } from "./index";

export default {
    title: "Svg/Bars",
    component: Bars,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Bars {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
