import React from 'react'
import { Story, Meta } from "@storybook/react";

import { TableList } from "./index";

export default {
    title: "Svg/TableList",
    component: TableList,
} as Meta;

const TemplateIndex: Story<{ className?:string }> = (args) => (
    <TableList {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
