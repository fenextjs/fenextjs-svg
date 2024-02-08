import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Patreon } from "./index";

export default {
    title: "Svg/Patreon",
    component: Patreon,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Patreon {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
