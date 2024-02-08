import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Fantime } from "./index";

export default {
    title: "Svg/Fantime",
    component: Fantime,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Fantime {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
