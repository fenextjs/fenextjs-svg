import { Story, Meta } from "@storybook/react";

import { MercadoLibre } from "./index";

export default {
    title: "Svg/MercadoLibre",
    component: MercadoLibre,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <MercadoLibre {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
