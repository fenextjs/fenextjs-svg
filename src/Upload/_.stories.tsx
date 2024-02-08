import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Upload,Upload2 } from "./index";

export default {
    title: "Svg/Upload",
    component: Upload,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Upload {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};

const TemplateIndex2: Story<{ className?: string }> = (args) => (
    <Upload2 {...args}/>
);

export const Index2 = TemplateIndex2.bind({});
Index2.args = {};