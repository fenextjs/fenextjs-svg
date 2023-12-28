import { Story, Meta } from "@storybook/react";

import { FrontIdentification } from "./index";

export default {
    title: "Svg/FrontIdentification",
    component: FrontIdentification,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <FrontIdentification {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
