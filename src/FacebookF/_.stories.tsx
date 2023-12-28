import { Story, Meta } from "@storybook/react";

import { FacebookF } from "./index";

export default {
    title: "Svg/FacebookF",
    component: FacebookF,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <FacebookF {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
