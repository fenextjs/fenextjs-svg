import { Story, Meta } from "@storybook/react";

import { Movil } from "./index";

export default {
    title: "Svg/Movil",
    component: Movil,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Movil {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
