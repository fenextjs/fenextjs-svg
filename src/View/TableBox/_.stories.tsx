import React from 'react'
import { Story, Meta } from "@storybook/react";

import { TableBox } from "./index";

export default {
    title: "Svg/TableBox",
    component: TableBox,
} as Meta;

const TemplateIndex: Story<{ className?:string }> = (args) => (
    <TableBox {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
