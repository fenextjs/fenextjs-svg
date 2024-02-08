import React from 'react'
import { Story, Meta } from "@storybook/react";

import { ImgAvatar } from "./index";

export default {
    title: "Svg/ImgAvatar",
    component: ImgAvatar,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <ImgAvatar {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};



