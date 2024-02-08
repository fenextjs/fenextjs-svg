import React from 'react'
import { Story, Meta } from "@storybook/react";

import { ManageAddresses } from "./index";

export default {
    title: "Svg/ManageAddresses",
    component: ManageAddresses,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <ManageAddresses {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
