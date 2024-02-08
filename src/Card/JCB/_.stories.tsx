import React from 'react'
import { Story, Meta } from "@storybook/react";

import { CardJCB } from "./index";

export default {
    title: "Svg/Card/JCB",
    component: CardJCB,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <CardJCB {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
