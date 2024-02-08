import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Google } from "./index";

export default {
    title: "Svg/Google",
    component: Google,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Google {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
