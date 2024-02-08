import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Close } from "./index";

export default {
    title: "Svg/Close",
    component: Close,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Close {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
