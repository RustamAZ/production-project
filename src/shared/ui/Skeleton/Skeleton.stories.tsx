import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
    width: '100%',
    height: '50px',
};

export const Circle = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Circle.args = {
    width: '100px',
    height: '100px',
    border: '50%',
};

export const NormalDark = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NormalDark.args = {
    width: '100%',
    height: '50px',
};

NormalDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CircleDark = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CircleDark.args = {
    width: '100px',
    height: '100px',
    border: '50%',
};

CircleDark.decorators = [ThemeDecorator(Theme.DARK)];
