import { Story, Meta } from "@storybook/react";

import { CryingUnicorn } from "./index";

export default {
    title: "Svg/CryingUnicorn",
    component: CryingUnicorn,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <CryingUnicorn {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
