import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Cashapp } from "./index";

export default {
    title: "Svg/Cashapp",
    component: Cashapp,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Cashapp {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
