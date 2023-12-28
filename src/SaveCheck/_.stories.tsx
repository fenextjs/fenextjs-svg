import { Story, Meta } from "@storybook/react";

import { SaveCheck } from "./index";

export default {
    title: "Svg/SaveCheck",
    component: SaveCheck,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <SaveCheck {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
