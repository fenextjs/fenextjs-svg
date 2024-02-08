import React from 'react'
import { Story, Meta } from "@storybook/react";

import { CardDinersClub } from "./index";

export default {
    title: "Svg/Card/DinersClub",
    component: CardDinersClub,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <CardDinersClub {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
