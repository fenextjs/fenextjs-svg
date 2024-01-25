import React from 'react'
import { Story, Meta } from "@storybook/react";

import { SelectNormal } from "./index";

export default {
    title: "Svg/SelectNormal",
    component: SelectNormal,
} as Meta;

const TemplateIndex: Story<{ className?:string }> = (args) => (
    <SelectNormal {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
