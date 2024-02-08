import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Zelle } from "./index";

export default {
    title: "Svg/Zelle",
    component: Zelle,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Zelle {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
