import { Story, Meta } from "@storybook/react";

import { Stack } from "./index";

export default {
    title: "Svg/Stack",
    component: Stack,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Stack {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
