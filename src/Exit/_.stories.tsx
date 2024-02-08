import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Exit } from "./index";

export default {
    title: "Svg/Exit",
    component: Exit,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Exit {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
