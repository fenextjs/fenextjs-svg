import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Arrow } from "./index";

export default {
    title: "Svg/Arrow",
    component: Arrow,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Arrow {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
