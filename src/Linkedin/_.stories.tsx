import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Linkedin } from "./index";

export default {
    title: "Svg/Linkedin",
    component: Linkedin,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Linkedin {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
