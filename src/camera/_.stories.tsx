import { Story, Meta } from "@storybook/react";

import { Camera } from "./index";

export default {
    title: "Svg/Camera",
    component: Camera,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Camera {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
