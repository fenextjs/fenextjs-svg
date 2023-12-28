import { Story, Meta } from "@storybook/react";

import { SoundCloud } from "./index";

export default {
    title: "Svg/SoundCloud",
    component: SoundCloud,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <SoundCloud {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
