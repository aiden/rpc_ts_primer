/**
 * @license
 * Copyright (c) Aiden.ai
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as shell from 'shelljs';
import { expect } from 'chai';

describe('index.ts', () => {
  specify('We get the expected console output', () => {
    const stdout = shell.exec('yarn start').stdout;
    expect(stdout).to.contain('Hello: Hola');
  });
});
