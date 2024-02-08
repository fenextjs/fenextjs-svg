import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Nequi } from "./index";

export default {
    title: "Svg/Nequi",
    component: Nequi,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Nequi {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
