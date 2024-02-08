import React from 'react'
import { Story, Meta } from "@storybook/react";

import { FacebookF } from "./index";

export default {
    title: "Svg/FacebookF",
    component: FacebookF,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <FacebookF {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
