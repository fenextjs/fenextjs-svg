import { Story, Meta } from "@storybook/react";

import { Bars } from "./index";

export default {
    title: "Svg/Bars",
    component: Bars,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Bars {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
