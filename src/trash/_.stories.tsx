import { Story, Meta } from "@storybook/react";

import { Trash } from "./index";

export default {
    title: "Svg/Trash",
    component: Trash,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Trash {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
