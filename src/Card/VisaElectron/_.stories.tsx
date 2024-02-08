import React from 'react'
import { Story, Meta } from "@storybook/react";

import { CardVisaElectron } from "./index";

export default {
    title: "Svg/Card/VisaElectron",
    component: CardVisaElectron,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <CardVisaElectron {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
