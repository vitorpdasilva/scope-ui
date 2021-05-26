import React from 'react';
import Title from './index';

export default {
	title: 'Typography/Title',
	component: Title,
}

const Template = (args, { argTypes }) => <Title {...args} />

export const Primary = Template.bind({});
export const Success = Template.bind({});
export const Warning = Template.bind({});
export const Inverse = Template.bind({});
export const Default = Template.bind({});
export const Info = Template.bind({});
export const Danger = Template.bind({});
export const Disabled = Template.bind({});


Primary.args = {
	children: 'Primary',
	level: 3,
	as: 'h1',
	variant: 'primary',
}

Success.args = {
	children: 'Success',
	level: 3,
	as: 'h1',
	variant: 'success',
}

Warning.args = {
	children: 'Warning',
	level: 3,
	as: 'h1',
	variant: 'warning',
}

Inverse.args = {
	children: 'Inverse',
	level: 3,
	as: 'h1',
	variant: 'inverse',
}

Default.args = {
	children: 'Default',
	level: 3,
	as: 'h1',
	variant: 'default',
}

Info.args = {
	children: 'Info',
	level: 3,
	as: 'h1',
	variant: 'info',
}

Danger.args = {
	children: 'Danger',
	level: 3,
	as: 'h1',
	variant: 'danger',
}

Disabled.args = {
	children: 'Disabled',
	level: 3,
	as: 'h1',
	variant: 'disabled',
}

