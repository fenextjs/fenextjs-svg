import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Loader } from "./index";

export default {
    title: "Svg/Loader",
    component: Loader,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Loader {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
