import { Story, Meta } from "@storybook/react";

import { CheckSearch } from "./index";

export default {
    title: "Svg/CheckSearch",
    component: CheckSearch,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <CheckSearch {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
