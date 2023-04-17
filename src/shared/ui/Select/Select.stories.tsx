import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    options: [
        {
            value: 'Тольятти',
            content: 'Тольятти',
        },
        {
            value: 'Москва',
            content: 'Москва',
        },
        {
            value: 'Казань',
            content: 'Казань',
        },
    ],
};

export const PrimaryLabel = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryLabel.args = {
    label: 'Города',
    options: [
        {
            value: 'Тольятти',
            content: 'Тольятти',
        },
        {
            value: 'Москва',
            content: 'Москва',
        },
        {
            value: 'Казань',
            content: 'Казань',
        },
    ],
};
