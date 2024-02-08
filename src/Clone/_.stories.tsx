import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Clone } from "./index";

export default {
    title: "Svg/Clone",
    component: Clone,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Clone {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
