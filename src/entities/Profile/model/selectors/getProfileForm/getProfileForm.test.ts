import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('should return form', () => {
        const form = {
            username: 'admin',
            age: 20,
            country: Country.Kazakhstan,
            lastname: 'Ernie',
            first: 'Sesame',
            avatar: 'Аватар',
            city: 'Test',
            currency: Currency.USD,
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });
});
