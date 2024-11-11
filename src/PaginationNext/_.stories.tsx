import React from "react";

import { Story, Meta } from "@storybook/react";

import { SvgPaginationNext } from "./index";

export default {
    title: "Svg/Pagination/Next",
    component: SvgPaginationNext,
} as Meta;

const Template: Story<{ className?: string }> = (args) => (
    <SvgPaginationNext {...args}/>
);

export const Index = Template.bind({});
Index.args = {};