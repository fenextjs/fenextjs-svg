import { Story, Meta } from "@storybook/react";

import { CardMasterCard } from "./index";

export default {
    title: "Svg/Card/MasterCard",
    component: CardMasterCard,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <CardMasterCard {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
