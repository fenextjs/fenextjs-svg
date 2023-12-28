import { Story, Meta } from "@storybook/react";

import { Fantime } from "./index";

export default {
    title: "Svg/Fantime",
    component: Fantime,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Fantime {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
