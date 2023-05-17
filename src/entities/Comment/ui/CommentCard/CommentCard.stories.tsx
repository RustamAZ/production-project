import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { CommentCard } from './CommentCard';

export default {
    title: 'entities/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Default = Template.bind({});
Default.args = {
    comment: {
        id: '1',
        text: 'test comment',
        user: {
            id: '1',
            username: 'user',
        },
    },
};

Default.decorators = [StoreDecorator({})];

export const DefaultDark = Template.bind({});
DefaultDark.args = {
    comment: {
        id: '1',
        text: 'test comment',
        user: {
            id: '1',
            username: 'user',
        },
    },
};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const isLoading = Template.bind({});
isLoading.args = {
    isLoading: true,
};
DefaultDark.decorators = [StoreDecorator({})];
