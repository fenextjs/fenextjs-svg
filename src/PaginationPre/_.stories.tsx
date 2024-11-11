import React from "react";

import { Story, Meta } from "@storybook/react";

import { SvgPaginationPre } from "./index";

export default {
    title: "Svg/Pagination/Pre",
    component: SvgPaginationPre,
} as Meta;

const Template: Story<{ className?: string }> = (args) => (
    <SvgPaginationPre {...args}/>
);

export const Index = Template.bind({});
Index.args = {};