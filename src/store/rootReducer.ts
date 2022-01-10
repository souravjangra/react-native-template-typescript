/*
 * Project: alautun
 * Created Date: Saturday, January 8th 2022
 * Author: Sourav Jangra (sourav@radiansys.com)
 * -----
 * Last Modified: Saturday, January 8th 2022 2:45:56 pm
 * Modified By: Sourav Jangra
 * -----
 * Copyright (c) 2022 Radiansys Inc
 */

import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './slices/auth';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
