import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { CommentList } from './CommentList';

export default {
    title: 'entities/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Default = Template.bind({});
Default.args = {
    comments: [
        {
            id: '1',
            text: 'test comment',
            user: {
                id: '1',
                username: 'user',
            },
        },
        {
            id: '2',
            text: 'test comment',
            user: {
                id: '1',
                username: 'user',
            },
        },
        {
            id: '3',
            text: 'test comment',
            user: {
                id: '1',
                username: 'user',
            },
        },
    ],
};

Default.decorators = [StoreDecorator({})];

export const isLoading = Template.bind({});
isLoading.args = {
    isLoading: true,
};
isLoading.decorators = [StoreDecorator({})];
