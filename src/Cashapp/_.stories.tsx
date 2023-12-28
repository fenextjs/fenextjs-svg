import { Story, Meta } from "@storybook/react";

import { Cashapp } from "./index";

export default {
    title: "Svg/Cashapp",
    component: Cashapp,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Cashapp {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
