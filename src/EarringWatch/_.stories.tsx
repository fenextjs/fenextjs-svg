import React from 'react'
import { Story, Meta } from "@storybook/react";

import { EarringWatch } from "./index";

export default {
    title: "Svg/EarringWatch",
    component: EarringWatch,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <EarringWatch {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
