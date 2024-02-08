import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Move } from "./index";

export default {
    title: "Svg/Move",
    component: Move,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Move {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
