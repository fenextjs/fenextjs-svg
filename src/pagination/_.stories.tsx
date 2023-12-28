import React from "react";
import { Story, Meta } from "@storybook/react";

import { PaginationDown,PaginationNext,PaginationPre,PaginationUp } from "./index";

export default {
    title: "Svg/Pagination",
    component: PaginationDown,
} as Meta;

const TemplatePaginationDown: Story<{ size?: number }> = (args) => (
    <PaginationDown {...args}/>
);

export const Pagination_Down = TemplatePaginationDown.bind({});
Pagination_Down.args = {};


const TemplatePaginationNext: Story<{ size?: number }> = (args) => (
    <PaginationNext {...args}/>
);

export const Pagination_Next = TemplatePaginationNext.bind({});
Pagination_Next.args = {};

const TemplatePaginationPre: Story<{ size?: number }> = (args) => (
    <PaginationPre {...args}/>
);

export const Pagination_Pre = TemplatePaginationPre.bind({});
Pagination_Pre.args = {};

const TemplatePaginationUp: Story<{ size?: number }> = (args) => (
    <PaginationUp {...args}/>
);

export const Pagination_Up = TemplatePaginationUp.bind({});
Pagination_Up.args = {};