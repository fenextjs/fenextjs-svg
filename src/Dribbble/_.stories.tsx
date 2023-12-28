import { Story, Meta } from "@storybook/react";

import { Dribbble } from "./index";

export default {
    title: "Svg/Dribbble",
    component: Dribbble,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Dribbble {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
