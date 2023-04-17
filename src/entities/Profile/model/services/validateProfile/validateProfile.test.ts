import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { validateProfile } from './validateProfile';
import { ValidateProfileError } from '../../types/profile';

const data = {
    username: 'admin',
    age: 20,
    country: Country.Kazakhstan,
    lastname: 'Ernie',
    first: 'Sesame',
    avatar: 'Аватар',
    city: 'Test',
    currency: Currency.USD,
};

describe('validateProfile.test', () => {
    test('success', async () => {
        const result = validateProfile(data);

        expect(result).toEqual([]);
    });

    test('without first and last name', async () => {
        const result = validateProfile({ ...data, first: '', lastname: '' });

        expect(result).toEqual([
            ValidateProfileError.INCORRET_USER_DATA,
        ]);
    });

    test('incorrect age', async () => {
        const result = validateProfile({ ...data, age: undefined });

        expect(result).toEqual([
            ValidateProfileError.INCORRET_AGE,
        ]);
    });

    test('incorrect county', async () => {
        const result = validateProfile({ ...data, country: undefined });

        expect(result).toEqual([
            ValidateProfileError.INCORRET_COUNTRY,
        ]);
    });

    test('all errors', async () => {
        const result = validateProfile({ });

        expect(result).toEqual([
            ValidateProfileError.INCORRET_USER_DATA,
            ValidateProfileError.INCORRET_AGE,
            ValidateProfileError.INCORRET_COUNTRY,
        ]);
    });
});
