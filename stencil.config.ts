import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';


export const config: Config = {
    namespace: 'googlebotttombar',
    outputTargets: [
        { type: 'dist' },
        { type: 'docs' },
        {
            type: 'www',
            serviceWorker: null // disable service workers
        }
    ],
    plugins: [
        sass()
    ]
};
