import React, { createContext, useContext } from "react";

export const defaultDuration = 300;

export const TransitionDurationContext = createContext<number>(defaultDuration);

export type TransitionDurationProviderProps = {
  duration?: number;
};

export const TransitionDurationContextProvider = (
  props: React.PropsWithChildren<TransitionDurationProviderProps>
) => {
  const { duration = defaultDuration, children } = props;
  return (
    <TransitionDurationContext.Provider value={duration}>
      {children}
    </TransitionDurationContext.Provider>
  );
};

export const useCurrentDuration = () => useContext(TransitionDurationContext);

export type TransitionFactorProviderProps = {
  factor: number;
};

export const TransitionFactorContextProvider = (
  props: React.PropsWithChildren<TransitionFactorProviderProps>
) => {
  const currentDuration = useCurrentDuration();
  const { factor, children } = props;
  const duration = factor * currentDuration;
  return (
    <TransitionDurationContextProvider duration={duration}>
      {children}
    </TransitionDurationContextProvider>
  );
};
