import { Story, Meta } from "@storybook/react";

import { ArrowCollapse } from "./index";

export default {
    title: "Svg/ArrowCollapse",
    component: ArrowCollapse,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <ArrowCollapse {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
