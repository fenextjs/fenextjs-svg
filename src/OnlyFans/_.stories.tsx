import React from 'react'
import { Story, Meta } from "@storybook/react";

import { OnlyFans } from "./index";

export default {
    title: "Svg/OnlyFans",
    component: OnlyFans,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <OnlyFans {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
