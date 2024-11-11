import React from "react";

import { Story, Meta } from "@storybook/react";

import { SvgPaginationDown } from "./index";

export default {
    title: "Svg/Pagination/Down",
    component: SvgPaginationDown,
} as Meta;

const Template: Story<{ className?: string }> = (args) => (
    <SvgPaginationDown {...args}/>
);

export const Index = Template.bind({});
Index.args = {};