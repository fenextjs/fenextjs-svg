import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Tiktok } from "./index";

export default {
    title: "Svg/Tiktok",
    component: Tiktok,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Tiktok {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
