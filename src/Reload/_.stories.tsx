import { Story, Meta } from "@storybook/react";

import { Reload } from "./index";

export default {
    title: "Svg/Reload",
    component: Reload,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Reload {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
