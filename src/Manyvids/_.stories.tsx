import { Story, Meta } from "@storybook/react";

import { Manyvids } from "./index";

export default {
    title: "Svg/Manyvids",
    component: Manyvids,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Manyvids {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
