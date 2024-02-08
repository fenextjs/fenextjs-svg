import React from 'react'
import { Story, Meta } from "@storybook/react";

import { MasterCard } from "./index";

export default {
    title: "Svg/MasterCard",
    component: MasterCard,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <MasterCard {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
