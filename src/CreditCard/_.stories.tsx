import React from 'react'
import { Story, Meta } from "@storybook/react";

import { CreditCard } from "./index";

export default {
    title: "Svg/CreditCard",
    component: CreditCard,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <CreditCard {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
