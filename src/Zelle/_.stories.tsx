import { Story, Meta } from "@storybook/react";

import { Zelle } from "./index";

export default {
    title: "Svg/Zelle",
    component: Zelle,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Zelle {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
