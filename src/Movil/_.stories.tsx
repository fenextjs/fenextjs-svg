import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Movil } from "./index";

export default {
    title: "Svg/Movil",
    component: Movil,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Movil {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
