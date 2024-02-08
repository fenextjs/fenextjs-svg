import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Telegram } from "./index";

export default {
    title: "Svg/Telegram",
    component: Telegram,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Telegram {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
