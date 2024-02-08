import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Bongacams } from "./index";

export default {
    title: "Svg/Bongacams",
    component: Bongacams,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Bongacams {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
