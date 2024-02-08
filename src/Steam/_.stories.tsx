import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Steam } from "./index";

export default {
    title: "Svg/Steam",
    component: Steam,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Steam {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
