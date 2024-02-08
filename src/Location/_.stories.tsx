import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Location,LocationAnimation } from "./index";

export default {
    title: "Svg/Location",
    component: Location,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Location {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};


const TemplateLocationAnimation: Story<{ className?: string }> = (args) => (
    <LocationAnimation {...args}/>
);

export const Location_Animation = TemplateLocationAnimation.bind({});
Location_Animation.args = {
    size:50
};

