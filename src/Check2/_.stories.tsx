import { Story, Meta } from "@storybook/react";

import { Check2 } from "./index";

export default {
    title: "Svg/MercadoLibre",
    component: Check2,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Check2 {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
