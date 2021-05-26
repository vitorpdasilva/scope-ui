import React from 'react';
import Button from './index';

export default {
  title: 'Form/Button',
  component: Button,
};

const Template = args => <Button {...args} />

export const Primary = Template.bind({});
export const Success = Template.bind({});
export const Warning = Template.bind({});
export const Inverse = Template.bind({});
export const Default = Template.bind({});
export const Info = Template.bind({});
export const Danger = Template.bind({});
export const Disabled = Template.bind({});

Primary.args = {
	variant: 'primary',
	children: 'primary',
};

Success.args = {
	variant: 'success',
	children: 'success',
};

Warning.args = {
	variant: 'warning',
	children: 'warning',
};

Inverse.args = {
	variant: 'inverse',
	children: 'inverse',
};

Default.args = {
	variant: 'default',
	children: 'default',
};

Info.args = {
	variant: 'info',
	children: 'info',
};

Danger.args = {
	variant: 'danger',
	children: 'danger',
};

Disabled.args = {
	variant: 'disabled',
	children: 'disabled',
};
