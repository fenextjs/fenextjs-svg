import { Story, Meta } from "@storybook/react";

import { DinersClub } from "./index";

export default {
    title: "Svg/DinersClub",
    component: DinersClub,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <DinersClub {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
