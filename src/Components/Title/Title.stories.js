import React from 'react';
import Title from './index';

export default {
	title: 'Typography/Title',
	component: Title,
}

const levels = [5, 4, 3, 2, 1];

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
	as: 'h1',
	variant: 'primary',
}
Primary.decorators = [
	() => (
		<>
			{levels.map(item => (
				<Title {...Primary.args} children={`Primary level ${item}`} level={item} />
			))}
		</>
	)
];

Success.args = {
	as: 'h1',
	variant: 'success',
}
Success.decorators = [
	() => (
		<>
			{levels.map(item => (
				<Title {...Success.args} children={`Success level ${item}`} level={item} />
			))}
		</>
	)
];

Warning.args = {
	as: 'h1',
	variant: 'warning',
}
Warning.decorators = [
	() => (
		<>
			{levels.map(item => (
				<Title {...Warning.args} children={`Warning level ${item}`} level={item} />
			))}
		</>
	)
];


Inverse.args = {
	children: 'Inverse',
	as: 'h1',
	variant: 'inverse',
}
Inverse.decorators = [
	() => (
		<>
			{levels.map(item => (
				<Title {...Inverse.args} children={`Inverse level ${item}`} level={item} />
			))}
		</>
	)
];

Default.args = {
	children: 'Default',
	as: 'h1',
	variant: 'default',
}
Default.decorators = [
	() => (
		<>
			{levels.map(item => (
				<Title {...Default.args} children={`Default level ${item}`} level={item} />
			))}
		</>
	)
];

Info.args = {
	children: 'Info',
	as: 'h1',
	variant: 'info',
}
Info.decorators = [
	() => (
		<>
			{levels.map(item => (
				<Title {...Info.args} children={`Info level ${item}`} level={item} />
			))}
		</>
	)
];

Danger.args = {
	children: 'Danger',
	level: 3,
	as: 'h1',
	variant: 'danger',
}
Danger.decorators = [
	() => (
		<>
			{levels.map(item => (
				<Title {...Info.args} children={`Info level ${item}`} level={item} />
			))}
		</>
	)
];

Disabled.args = {
	children: 'Disabled',
	as: 'h1',
	variant: 'disabled',
}
Disabled.decorators = [
	() => (
		<>
			{levels.map(item => (
				<Title {...Disabled.args} children={`Disabled level ${item}`} level={item} />
			))}
		</>
	)
];

