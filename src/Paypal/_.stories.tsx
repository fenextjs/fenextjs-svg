import { Story, Meta } from "@storybook/react";

import { Paypal } from "./index";

export default {
    title: "Svg/Paypal",
    component: Paypal,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Paypal {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
