import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Trash } from "./index";

export default {
    title: "Svg/Trash",
    component: Trash,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Trash {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
