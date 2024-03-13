import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Bolt } from "./index";

export default {
    title: "Svg/Bolt",
    component: Bolt,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Bolt {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
