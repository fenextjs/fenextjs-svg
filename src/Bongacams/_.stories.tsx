import { Story, Meta } from "@storybook/react";

import { Bongacams } from "./index";

export default {
    title: "Svg/Bongacams",
    component: Bongacams,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <Bongacams {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
