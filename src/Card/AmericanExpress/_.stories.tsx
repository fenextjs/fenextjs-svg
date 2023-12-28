import { Story, Meta } from "@storybook/react";

import { CardAmericanExpress } from "./index";

export default {
    title: "Svg/Card/AmericanExpress",
    component: CardAmericanExpress,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <CardAmericanExpress {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
