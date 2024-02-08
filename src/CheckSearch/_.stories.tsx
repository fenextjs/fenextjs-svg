import React from 'react'
import { Story, Meta } from "@storybook/react";

import { CheckSearch } from "./index";

export default {
    title: "Svg/CheckSearch",
    component: CheckSearch,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <CheckSearch {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
