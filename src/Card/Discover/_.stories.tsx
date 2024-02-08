import React from 'react'
import { Story, Meta } from "@storybook/react";

import { CardDiscover } from "./index";

export default {
    title: "Svg/Card/Discover",
    component: CardDiscover,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <CardDiscover {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
