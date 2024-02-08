import React from 'react'
import { Story, Meta } from "@storybook/react";

import { DinersClub } from "./index";

export default {
    title: "Svg/DinersClub",
    component: DinersClub,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <DinersClub {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
