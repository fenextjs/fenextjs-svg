import { Story, Meta } from "@storybook/react";

import { Edit } from "./index";

export default {
    title: "Svg/Edit",
    component: Edit,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Edit {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
