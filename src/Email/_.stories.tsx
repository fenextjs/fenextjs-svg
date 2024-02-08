import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Email } from "./index";

export default {
    title: "Svg/Email",
    component: Email,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Email {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
