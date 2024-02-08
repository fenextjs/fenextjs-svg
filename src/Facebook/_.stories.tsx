import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Facebook } from "./index";

export default {
    title: "Svg/Facebook",
    component: Facebook,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Facebook {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
