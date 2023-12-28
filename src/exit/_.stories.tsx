import { Story, Meta } from "@storybook/react";

import { Exit } from "./index";

export default {
    title: "Svg/Exit",
    component: Exit,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Exit {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
