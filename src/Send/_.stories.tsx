import React from 'react'
import { Story, Meta } from "@storybook/react";

import { SvgSend } from "./index";

export default {
    title: "Svg/Send",
    component: SvgSend,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <SvgSend {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
