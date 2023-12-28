import { Story, Meta } from "@storybook/react";

import { Unicorn } from "./index";

export default {
    title: "Svg/Unicorn",
    component: Unicorn,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Unicorn {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
