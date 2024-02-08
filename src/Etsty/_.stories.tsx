import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Etsty } from "./index";

export default {
    title: "Svg/Etsty",
    component: Etsty,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Etsty {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
