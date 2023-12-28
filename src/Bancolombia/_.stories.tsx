import { Story, Meta } from "@storybook/react";

import { Bancolombia } from "./index";

export default {
    title: "Svg/Bancolombia",
    component: Bancolombia,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Bancolombia {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
