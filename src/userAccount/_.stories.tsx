import { Story, Meta } from "@storybook/react";

import { UserAccount,UserAccount2 } from "./index";

export default {
    title: "Svg/UserAccount",
    component: UserAccount,
} as Meta;

const TemplateIndex: Story<{ size?: number }> = (args) => (
    <UserAccount {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};



const UserAccount2Index: Story<{ size?: number }> = (args) => (
    <UserAccount2 {...args}/>
);

export const User_Account2 = UserAccount2Index.bind({});
User_Account2.args = {};