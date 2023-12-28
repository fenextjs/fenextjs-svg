import { Story, Meta } from "@storybook/react";

import { Pix } from "./index";

export default {
    title: "Svg/Pix",
    component: Pix,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Pix {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
