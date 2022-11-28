import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../../context/store";

export const useProductSelector: TypedUseSelectorHook<RootState> = useSelector;
