import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Pinterest } from "./index";

export default {
    title: "Svg/Pinterest",
    component: Pinterest,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Pinterest {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
