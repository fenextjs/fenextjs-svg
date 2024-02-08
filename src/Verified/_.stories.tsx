import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Verified} from "./index";

export default {
    title: "Svg/Verified",
    component: Verified,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Verified {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
