import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Stripachat } from "./index";

export default {
    title: "Svg/Stripachat",
    component: Stripachat,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Stripachat {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
