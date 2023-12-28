import { Story, Meta } from "@storybook/react";

import { Size } from "./index";

export default {
    title: "Svg/Size",
    component: Size,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Size {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
