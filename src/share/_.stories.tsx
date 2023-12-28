import { Story, Meta } from "@storybook/react";

import { Share } from "./index";

export default {
    title: "Svg/Share",
    component: Share,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Share {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
