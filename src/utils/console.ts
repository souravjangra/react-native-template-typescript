/*
 * Project: alautun
 * Created Date: Saturday, January 8th 2022
 * Author: Sourav Jangra (sourav@radiansys.com)
 * -----
 * Last Modified: Saturday, January 8th 2022 10:52:17 am
 * Modified By: Sourav Jangra
 * -----
 * Copyright (c) 2022 Radiansys Inc
 */

import { FileLogger } from 'react-native-file-logger';

export const log = (...args: any[]) => {
  if (__DEV__) {
    console.log(...args);
  } else {
    FileLogger.info(`${args.join(' ')}`);
  }
};

export const debug = (...args: any[]) => {
  if (__DEV__) {
    console.debug(...args);
  } else {
    FileLogger.debug(`${args.join(' ')}`);
  }
};

export const warn = (...args: any[]) => {
  if (__DEV__) {
    console.warn(...args);
  } else {
    FileLogger.warn(`${args.join(' ')}`);
  }
};

export const error = (...args: any[]) => {
  if (__DEV__) {
    console.error(...args);
  } else {
    FileLogger.error(`${args.join(' ')}`);
  }
};
