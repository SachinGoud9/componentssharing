import React from "react";

import Checkbox from "./Checkbox";

import { action } from "@storybook/addon-actions";


export default {
  title: "atoms/Checkbox",
  component: Checkbox,
};
const Template = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
