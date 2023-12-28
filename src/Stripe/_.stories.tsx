import { Story, Meta } from "@storybook/react";

import { Stripe } from "./index";

export default {
    title: "Svg/Stripe",
    component: Stripe,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Stripe {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
