import { Story, Meta } from "@storybook/react";

import { Img } from "./index";

export default {
    title: "Svg/Img",
    component: Img,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Img {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
