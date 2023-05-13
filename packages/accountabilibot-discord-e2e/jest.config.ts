/* eslint-disable */
export default {
    displayName: 'accountabilibot-discord-e2e',
    preset: '../..//jest.preset.js',
    setupFiles: ['<rootDir>/src/test-setup.ts'],
    testEnvironment: 'node',
    transform: {
        '^.+\\.[tj]s$': [
            'ts-jest',
            {
                tsconfig: '<rootDir>/tsconfig.spec.json',
            },
        ],
    },
    moduleFileExtensions: ['ts', 'js', 'html'],
    coverageDirectory: '../..//coverage/accountabilibot-discord-e2e',
};
