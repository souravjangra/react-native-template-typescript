/*
 * Project: alautun
 * Created Date: Saturday, January 8th 2022
 * Author: Sourav Jangra (sourav@radiansys.com)
 * -----
 * Last Modified: Saturday, January 8th 2022 2:46:04 pm
 * Modified By: Sourav Jangra
 * -----
 * Copyright (c) 2022 Radiansys Inc
 */

import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {}

const initialState: AuthState = {};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
});

const authReducer = authSlice.reducer;
export default authReducer;
