/*
 * Project: alautun
 * Created Date: Saturday, January 8th 2022
 * Author: Sourav Jangra (sourav@radiansys.com)
 * -----
 * Last Modified: Monday, January 10th 2022 4:07:56 pm
 * Modified By: Sourav Jangra
 * -----
 * Copyright (c) 2022 Radiansys Inc
 */

/* PLOP_INJECT_IMPORT */
/* eslint import/no-cycle: [2, { maxDepth: 1 }] */
import Home from '@screens/Home';

export type CommonStackParamList = {
  /* PLOP_INJECT_TYPE */
  Home: undefined;
};

export const commonScreens = {
  /* PLOP_INJECT_SCREEN */
  Home: { component: Home },
};
