import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Whatsapp } from "./index";

export default {
    title: "Svg/Whatsapp",
    component: Whatsapp,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Whatsapp {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
