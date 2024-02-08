import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Bancolombia } from "./index";

export default {
    title: "Svg/Bancolombia",
    component: Bancolombia,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Bancolombia {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
