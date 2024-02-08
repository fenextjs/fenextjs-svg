import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Camsoda } from "./index";

export default {
    title: "Svg/Camsoda",
    component: Camsoda,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Camsoda {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
