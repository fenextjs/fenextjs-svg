import { Story, Meta } from "@storybook/react";

import { Copy } from "./index";

export default {
    title: "Svg/Copy",
    component: Copy,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Copy {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
