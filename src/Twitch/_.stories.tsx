import { Story, Meta } from "@storybook/react";

import { Twitch } from "./index";

export default {
    title: "Svg/Twitch",
    component: Twitch,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Twitch {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
