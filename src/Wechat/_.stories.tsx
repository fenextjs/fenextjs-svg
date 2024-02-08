import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Wechat } from "./index";

export default {
    title: "Svg/Wechat",
    component: Wechat,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Wechat {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
