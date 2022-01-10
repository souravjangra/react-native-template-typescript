/*
 * Project: alautun
 * Created Date: Saturday, January 8th 2022
 * Author: Sourav Jangra (sourav@radiansys.com)
 * -----
 * Last Modified: Sunday, January 9th 2022 11:17:23 pm
 * Modified By: Sourav Jangra
 * -----
 * Copyright (c) 2022 Radiansys Inc
 */

/* PLOP_INJECT_IMPORT */
import { Home } from '@screens/Home';

export type CommonStackParamList = {
  /* PLOP_INJECT_TYPE */
  Home: undefined;
};

export const commonScreens = {
  /* PLOP_INJECT_SCREEN */
  Home: { component: Home },
};
