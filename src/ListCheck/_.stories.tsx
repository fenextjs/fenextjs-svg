import React from 'react'
import { Story, Meta } from "@storybook/react";

import { ListCheck } from "./index";

export default {
    title: "Svg/ListCheck",
    component: ListCheck,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <ListCheck {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
