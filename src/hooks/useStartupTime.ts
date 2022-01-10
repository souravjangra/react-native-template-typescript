/*
 * Project: alautun
 * Created Date: Saturday, January 8th 2022
 * Author: Sourav Jangra
 * -----
 * Last Modified: Sunday, January 9th 2022 11:17:23 pm
 * Modified By: Sourav Jangra
 * -----
 * Copyright (c) 2022 Radiansys Inc
 */

import { useEffect } from 'react';
import { getTimeSinceStartup } from 'react-native-startup-time';

export default function useStartupTime() {
  useEffect(() => {
    getTimeSinceStartup()
      .then((time) => {
        // Captured by FileLogger in production
        console.log({ startuptime: time });
      })
      .catch((err) => {});
  }, []);
}
