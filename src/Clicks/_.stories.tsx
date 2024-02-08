import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Clicks } from "./index";

export default {
    title: "Svg/Clicks",
    component: Clicks,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Clicks {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
