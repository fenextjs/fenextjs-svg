import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Behance } from "./index";

export default {
    title: "Svg/Behance",
    component: Behance,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Behance {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
