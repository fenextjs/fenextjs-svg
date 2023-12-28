import { Story, Meta } from "@storybook/react";

import { Behance } from "./index";

export default {
    title: "Svg/Behance",
    component: Behance,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Behance {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
