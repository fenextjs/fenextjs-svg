import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Jcb } from "./index";

export default {
    title: "Svg/Jcb",
    component: Jcb,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Jcb {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
