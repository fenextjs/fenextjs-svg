import React from 'react'
import { Story, Meta } from "@storybook/react";

import { UnicornWithMoney } from "./index";

export default {
    title: "Svg/UnicornWithMoney",
    component: UnicornWithMoney,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <UnicornWithMoney {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
