import { Story, Meta } from "@storybook/react";

import { CardVisa } from "./index";

export default {
    title: "Svg/Card/Visa",
    component: CardVisa,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <CardVisa {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
