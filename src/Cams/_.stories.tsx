import { Story, Meta } from "@storybook/react";

import { Cams } from "./index";

export default {
    title: "Svg/Cams",
    component: Cams,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Cams {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
