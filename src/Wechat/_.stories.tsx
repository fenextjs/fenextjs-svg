import { Story, Meta } from "@storybook/react";

import { Wechat } from "./index";

export default {
    title: "Svg/Wechat",
    component: Wechat,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Wechat {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
