import React from 'react';
import Title from './index';

export default {
	title: 'Typography/Title',
	component: Title,
}

const Template = args => <Title {...args} />

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
	as: 'h1',
	variant: 'primary',
}
Primary.decorators = [
	() => (
		<>
			<Title {...Primary.args} level={5} />
			<Title {...Primary.args} level={4} />
			<Title {...Primary.args} level={3} />
			<Title {...Primary.args} level={2} />
			<Title {...Primary.args} level={1} />
		</>
	)
]

Success.args = {
	children: 'Success',
	as: 'h1',
	variant: 'success',
}

Warning.args = {
	children: 'Warning',
	as: 'h1',
	variant: 'warning',
}

Inverse.args = {
	children: 'Inverse',
	as: 'h1',
	variant: 'inverse',
}

Default.args = {
	children: 'Default',
	as: 'h1',
	variant: 'default',
}

Info.args = {
	children: 'Info',
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
	as: 'h1',
	variant: 'disabled',
}

