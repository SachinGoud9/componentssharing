import React from "react";

import { Secondary, Tertiary } from "../../atoms/MyTypography/MyTypography.stories";
import MyListItem from "./MyListItem";


export default {
    title: "molecules/SideNavbarTab",
    component: MyListItem,
};
const Template = (args) => <MyListItem {...args} />;

export const PrimaryListItem = Template.bind({});

