import { Story, Meta } from "@storybook/react";

import { ShareArrow } from "./index";

export default {
    title: "Svg/ShareArrow",
    component: ShareArrow,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <ShareArrow {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
