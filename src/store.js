import create from "zustand";
import {devtools} from "zustand/middleware";

import convertorSlice from "./slices/convertorSlice";

export const converterStore = create(devtools(convertorSlice))