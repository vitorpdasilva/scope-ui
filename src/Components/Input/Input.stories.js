import React from 'react';
import Input from './index';

export default {
	title: 'Form/Input',
	component: Input,
};

export const Primary = () => <Input variant="primary" placeholder="primary" />
export const Success = () => <Input variant="success" placeholder="success" />
export const Warning = () => <Input variant="warning" placeholder="warning" />
export const Inverse = () => <Input variant="inverse" placeholder="inverse" />
export const Default = () => <Input variant="default" placeholder="default" />
export const Info = () => <Input variant="info" placeholder="info" />
export const Danger = () => <Input variant="danger" placeholder="danger" />
export const Disabled = () => <Input variant="disabled" placeholder="disabled" />
