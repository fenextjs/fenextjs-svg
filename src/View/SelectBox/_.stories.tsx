import { Story, Meta } from "@storybook/react";

import { SelectBox } from "./index";

export default {
    title: "Svg/SelectBox",
    component: SelectBox,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <SelectBox {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
