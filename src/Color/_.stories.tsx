import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Color } from "./index";

export default {
    title: "Svg/Color",
    component: Color,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Color {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
