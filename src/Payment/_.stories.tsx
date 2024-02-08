import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Payment } from "./index";

export default {
    title: "Svg/Payment",
    component: Payment,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Payment {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
