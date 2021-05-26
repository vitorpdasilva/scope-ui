import React from 'react';
import Input from './index';

export default {
	title: 'Form/Input',
	component: Input,
};

const Template = args => <Input {...args} />

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
};

Success.args = {
	variant: 'success',
};

Warning.args = {
	variant: 'warning',
};

Inverse.args = {
	variant: 'inverse',
};

Default.args = {
	variant: 'default',
};

Info.args = {
	variant: 'info',
};

Danger.args = {
	variant: 'danger',
};

Disabled.args = {
	variant: 'disabled',
};
