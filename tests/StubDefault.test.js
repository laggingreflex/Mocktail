import                     './test-utils/Setup';
import Authentication from './test-utils/exports/Default';

describe('Mocktail: Stub Default', () => {

    it('Should be able to import the default stub object;', () => {
        expect(Authentication.name).toEqual('AuthenticationMock');
    });

});
