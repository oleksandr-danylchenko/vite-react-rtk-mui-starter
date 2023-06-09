import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  FunctionKey,
  FunctionOption,
  functionsOptions,
} from '@/fixtures/functions';
import type { RootState } from '@/store/store';

export interface TabulationControls {
  funcKey: FunctionKey;
  xStart: number;
  xEnd: number;
  step: number;
}

export interface TabulationState {
  controls: TabulationControls;
}

const initialState: TabulationState = {
  controls: {
    funcKey: FunctionKey.X_SQUARED,
    xStart: -1,
    xEnd: 1,
    step: 0.1,
  },
};

const tabulationSlice = createSlice({
  name: 'tabulation',
  initialState,
  reducers: {
    setTabulationArgs: (state, action: PayloadAction<TabulationControls>) =>
      Object.assign(state, action.payload),
  },
});

export const tabulationReducer = tabulationSlice.reducer;

export const { setTabulationArgs } = tabulationSlice.actions;

export const selectFunctionOption = (state: RootState): FunctionOption =>
  functionsOptions[state.tabulation.controls.funcKey]!;
