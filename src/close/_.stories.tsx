import { Story, Meta } from "@storybook/react";

import { Close } from "./index";

export default {
    title: "Svg/Close",
    component: Close,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Close {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
