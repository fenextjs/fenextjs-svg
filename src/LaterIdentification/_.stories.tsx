import React from 'react'
import { Story, Meta } from "@storybook/react";

import { LaterIdentification } from "./index";

export default {
    title: "Svg/LaterIdentification",
    component: LaterIdentification,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <LaterIdentification {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
