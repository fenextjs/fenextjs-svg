import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Add } from "./index";

export default {
    title: "Svg/Add",
    component: Add,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Add {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
