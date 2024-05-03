import React from 'react'
import { Story, Meta } from "@storybook/react";

import { SvgImg } from "./index";

export default {
    title: "Svg/Img",
    component: SvgImg,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <SvgImg {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
