import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
Primary.decorators = [StoreDecorator({
    login: {
        username: '123',
        password: '123',
    },
})];

export const WithError = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithError.args = {};
WithError.decorators = [StoreDecorator({
    login: {
        username: '123',
        password: '123',
        error: 'ERROR',
    },
})];

export const isLoading = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
isLoading.args = {};
isLoading.decorators = [StoreDecorator({
    login: {
        isLoading: true,
    },
})];
