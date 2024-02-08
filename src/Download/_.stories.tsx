import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Download } from "./index";

export default {
    title: "Svg/Download",
    component: Download,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Download {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
