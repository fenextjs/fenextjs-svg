import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Unicorn } from "./index";

export default {
    title: "Svg/Unicorn",
    component: Unicorn,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Unicorn {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
