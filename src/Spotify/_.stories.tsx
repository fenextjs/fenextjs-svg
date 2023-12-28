import { Story, Meta } from "@storybook/react";

import { Spotify } from "./index";

export default {
    title: "Svg/Spotify",
    component: Spotify,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Spotify {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
