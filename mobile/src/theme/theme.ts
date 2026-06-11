// src/theme/theme.ts

import {
    darkColors,
    lightColors,
} from "./colors";

import { spacing } from "./spacing";
import { typography } from "./typography";

export type ThemeColors = typeof lightColors;

export const lightTheme = {
  colors: lightColors,
  spacing,
  typography,
};

export const darkTheme = {
  colors: darkColors,
  spacing,
  typography,
};

export type AppTheme =
  | typeof lightTheme
  | typeof darkTheme;