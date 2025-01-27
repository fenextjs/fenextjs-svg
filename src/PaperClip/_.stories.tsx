import React from 'react'
import { Story, Meta } from "@storybook/react";

import { SvgPaperClip } from "./index";

export default {
    title: "Svg/PaperClip",
    component: SvgPaperClip,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <SvgPaperClip {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
