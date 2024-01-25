import React from 'react'
import { Story, Meta } from "@storybook/react";

import { SelectList } from "./index";

export default {
    title: "Svg/SelectList",
    component: SelectList,
} as Meta;

const TemplateIndex: Story<{ className?:string }> = (args) => (
    <SelectList {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
