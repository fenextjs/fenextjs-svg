import { Story, Meta } from "@storybook/react";

import { Pinterest } from "./index";

export default {
    title: "Svg/Pinterest",
    component: Pinterest,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Pinterest {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
