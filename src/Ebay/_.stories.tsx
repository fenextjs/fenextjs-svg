import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Ebay } from "./index";

export default {
    title: "Svg/Ebay",
    component: Ebay,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Ebay {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
