import { Story, Meta } from "@storybook/react";

import { CreditCard } from "./index";

export default {
    title: "Svg/CreditCard",
    component: CreditCard,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <CreditCard {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
