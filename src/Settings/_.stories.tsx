import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Settings } from "./index";

export default {
    title: "Svg/Settings",
    component: Settings,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Settings {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
