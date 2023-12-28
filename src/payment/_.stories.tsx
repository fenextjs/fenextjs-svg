import { Story, Meta } from "@storybook/react";

import { Payment } from "./index";

export default {
    title: "Svg/Payment",
    component: Payment,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Payment {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
