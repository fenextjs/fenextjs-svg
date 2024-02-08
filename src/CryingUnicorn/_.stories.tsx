import React from 'react'
import { Story, Meta } from "@storybook/react";

import { CryingUnicorn } from "./index";

export default {
    title: "Svg/CryingUnicorn",
    component: CryingUnicorn,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <CryingUnicorn {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
