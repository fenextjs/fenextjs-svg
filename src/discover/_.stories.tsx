import { Story, Meta } from "@storybook/react";

import { Discover } from "./index";

export default {
    title: "Svg/Discover",
    component: Discover,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Discover {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
