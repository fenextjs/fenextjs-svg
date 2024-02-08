import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Youtube } from "./index";

export default {
    title: "Svg/Youtube",
    component: Youtube,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Youtube {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
