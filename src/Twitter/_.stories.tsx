import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Twitter } from "./index";

export default {
    title: "Svg/Twitter",
    component: Twitter,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Twitter {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
