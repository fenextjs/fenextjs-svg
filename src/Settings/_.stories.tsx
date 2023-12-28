import { Story, Meta } from "@storybook/react";

import { Settings } from "./index";

export default {
    title: "Svg/Settings",
    component: Settings,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Settings {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
