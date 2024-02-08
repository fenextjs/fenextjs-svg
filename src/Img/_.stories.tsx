import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Img } from "./index";

export default {
    title: "Svg/Img",
    component: Img,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Img {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
