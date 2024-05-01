import { treaty } from '@elysiajs/eden';
import { App } from '../../../src/index';
export type { App };

export const api = treaty<App>('localhost:3000');
