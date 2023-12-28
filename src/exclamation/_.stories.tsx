import { Story, Meta } from "@storybook/react";

import { Exclamation } from "./index";

export default {
    title: "Svg/Exclamation",
    component: Exclamation,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Exclamation {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
