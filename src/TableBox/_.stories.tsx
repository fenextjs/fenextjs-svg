import { Story, Meta } from "@storybook/react";

import { TableBox } from "./index";

export default {
    title: "Svg/TableBox",
    component: TableBox,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <TableBox {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
