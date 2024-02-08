import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Twitch } from "./index";

export default {
    title: "Svg/Twitch",
    component: Twitch,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Twitch {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
