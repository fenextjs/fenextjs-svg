import { Story, Meta } from "@storybook/react";

import { SVGSearch } from "./index";

export default {
    title: "Svg/Search",
    component: SVGSearch,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <SVGSearch {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
