import { Story, Meta } from "@storybook/react";

import { Instagram } from "./index";

export default {
    title: "Svg/Instagram",
    component: Instagram,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Instagram {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
