"use client";

import React, {
  createContext,
  useState,
  useContext,
  useReducer,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

interface LoadingContextType {
  loading: boolean;
  isLoading: Dispatch<SetStateAction<boolean>>;
}

export const LoadingContext = createContext<{
  loading: boolean;
  isLoading: Dispatch<SetStateAction<boolean>>;
}>({
  loading: false,
  isLoading: () => {},
});

const LoadingContextProvider = (props: { children: React.ReactNode }) => {
  const [loading, isLoading] = useState(true);


  return (
    <LoadingContext.Provider value={{ loading, isLoading }}>
      {props.children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);

  if (!context)
    throw new Error("useAuth must be used within an AuthContextProvider");

  const { loading, isLoading } = context;

  return { loading, isLoading };
};

export default LoadingContextProvider;
