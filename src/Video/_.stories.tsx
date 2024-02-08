import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Video } from "./index";

export default {
    title: "Svg/Video",
    component: Video,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Video {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
