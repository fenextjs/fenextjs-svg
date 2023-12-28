import { Story, Meta } from "@storybook/react";

import { Nequi } from "./index";

export default {
    title: "Svg/Nequi",
    component: Nequi,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Nequi {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
