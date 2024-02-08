import React from 'react'
import { Story, Meta } from "@storybook/react";

import { SaveCheck } from "./index";

export default {
    title: "Svg/SaveCheck",
    component: SaveCheck,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <SaveCheck {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
