import { Story, Meta } from "@storybook/react";

import { ImgAvatar } from "./index";

export default {
    title: "Svg/ImgAvatar",
    component: ImgAvatar,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <ImgAvatar {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};



