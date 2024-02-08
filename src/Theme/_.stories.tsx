import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Theme } from "./index";

export default {
    title: "Svg/Theme",
    component: Theme,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Theme {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
