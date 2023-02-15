import { ClassNames } from 'shared/lib/ClassNames/ClassNames';

describe('classNames', () => {
    test('with only first params', () => {
        expect(ClassNames('someClass')).toBe('someClass');
    });

    test('with additional params', () => {
        const expeced = 'someClass class1 class2';
        expect(ClassNames('someClass', {}, ['class1', 'class2'])).toBe(expeced);
    });

    test('with mods', () => {
        const expeced = 'someClass class1 class2 hovered scrollabled';
        expect(ClassNames(
            'someClass',
            { hovered: true, scrollabled: true },
            ['class1', 'class2'],
        )).toBe(expeced);
    });

    test('with mods', () => {
        const expeced = 'someClass class1 class2 hovered';
        expect(ClassNames(
            'someClass',
            { hovered: true, scrollabled: false },
            ['class1', 'class2'],
        )).toBe(expeced);
    });

    test('with mods', () => {
        const expeced = 'someClass class1 class2 scrollabled';
        expect(ClassNames(
            'someClass',
            { hovered: undefined, scrollabled: true },
            ['class1', 'class2'],
        )).toBe(expeced);
    });
});
