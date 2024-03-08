import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Location } from "./index";

export default {
    title: "Svg/Location",
    component: Location,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Location {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};



