import { Story, Meta } from "@storybook/react";

import { Snapchat } from "./index";

export default {
    title: "Svg/Snapchat",
    component: Snapchat,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Snapchat {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
