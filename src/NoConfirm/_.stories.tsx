import { Story, Meta } from "@storybook/react";

import { NoConfirm } from "./index";

export default {
    title: "Svg/NoConfirm",
    component: NoConfirm,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <NoConfirm {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};

