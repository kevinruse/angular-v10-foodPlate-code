import { InjectionToken } from '@angular/core';
import { ITest } from './TestInterface';

export const testToken = new InjectionToken<ITest>('test token');
