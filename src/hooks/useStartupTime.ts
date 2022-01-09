/*
 * Project: alautun
 * Created Date: Saturday, January 8th 2022
 * Author: Sourav Jangra
 * -----
 * Last Modified: Saturday, January 8th 2022 10:48:36 am
 * Modified By: Sourav Jangra
 * -----
 * Copyright (c) 2022 Radiansys Inc
 */

import { useEffect } from 'react';
import { getTimeSinceStartup } from 'react-native-startup-time';

export default function useStartupTime() {
  useEffect(() => {
    getTimeSinceStartup().then((time) => {
      // Captured by FileLogger in production
      console.log({ startuptime: time });
    });
  }, []);
}
