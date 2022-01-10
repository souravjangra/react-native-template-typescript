/* eslint-disable no-console */
/*
 * Project: alautun
 * Created Date: Saturday, January 8th 2022
 * Author: Sourav Jangra (sourav@radiansys.com)
 * -----
 * Last Modified: Monday, January 10th 2022 4:05:36 pm
 * Modified By: Sourav Jangra
 * -----
 * Copyright (c) 2022 Radiansys Inc
 */

import { FileLogger } from 'react-native-file-logger';

export const log = (...args: unknown[]) => {
  if (__DEV__) {
    console.log(...args);
  } else {
    FileLogger.info(`${args.join(' ')}`);
  }
};

export const debug = (...args: unknown[]) => {
  if (__DEV__) {
    console.debug(...args);
  } else {
    FileLogger.debug(`${args.join(' ')}`);
  }
};

export const warn = (...args: unknown[]) => {
  if (__DEV__) {
    console.warn(...args);
  } else {
    FileLogger.warn(`${args.join(' ')}`);
  }
};

export const error = (...args: unknown[]) => {
  if (__DEV__) {
    console.error(...args);
  } else {
    FileLogger.error(`${args.join(' ')}`);
  }
};
