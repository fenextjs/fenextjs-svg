import { Story, Meta } from "@storybook/react";

import { MasterCard } from "./index";

export default {
    title: "Svg/MasterCard",
    component: MasterCard,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <MasterCard {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
