import React from "react";

import { Story, Meta } from "@storybook/react";

import { SvgPaginationUp } from "./index";

export default {
    title: "Svg/Pagination/Up",
    component: SvgPaginationUp,
} as Meta;

const Template: Story<{ className?: string }> = (args) => (
    <SvgPaginationUp {...args}/>
);

export const Index = Template.bind({});
Index.args = {};