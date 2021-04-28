import React from 'react';

import Button from './index';

export default {
  title: 'Form/Button',
  component: Button,
};

export const Primary = () => <Button variant="primary">primary</Button>
export const Success = () => <Button variant="success">success</Button>
export const Warning = () => <Button variant="warning">warning</Button>
export const Inverse = () => <Button variant="inverse">inverse</Button>
export const Default = () => <Button variant="default">default</Button>
export const Info = () => <Button variant="info">info</Button>
export const Danger = () => <Button variant="danger">danger</Button>
export const Disabled = () => <Button variant="disabled">disabled</Button>
