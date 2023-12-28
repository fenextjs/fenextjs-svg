import { Story, Meta } from "@storybook/react";

import { Estadisticas } from "./index";

export default {
    title: "Svg/Estadisticas",
    component: Estadisticas,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Estadisticas {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
