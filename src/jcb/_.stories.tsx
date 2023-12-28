import { Story, Meta } from "@storybook/react";

import { Jcb } from "./index";

export default {
    title: "Svg/Jcb",
    component: Jcb,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Jcb {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
