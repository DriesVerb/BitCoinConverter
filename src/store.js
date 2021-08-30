import create from "zustand";
import { devtools } from "zustand/middleware";

import converterSlice from "./slices/converterSlice";

export const converterStore = create(devtools(converterSlice));
