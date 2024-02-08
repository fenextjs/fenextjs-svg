import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Stremate } from "./index";

export default {
    title: "Svg/Stremate",
    component: Stremate,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Stremate {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
