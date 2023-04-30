import { getHeading } from '../support/app.po';

describe('accountabilibot-frontend', () => {
    beforeEach(() => cy.visit('/'));

    it('should display hello world', () => {
        // Custom command example, see `../support/commands.ts` file

        // Function helper example, see `../support/app.po.ts` file
        getHeading().contains('Hello World!');
    });
});
