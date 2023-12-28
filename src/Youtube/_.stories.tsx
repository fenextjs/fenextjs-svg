import { Story, Meta } from "@storybook/react";

import { Youtube } from "./index";

export default {
    title: "Svg/Youtube",
    component: Youtube,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Youtube {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
