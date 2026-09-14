import { type ReactNode } from 'react';
import { ErrorAlert } from './error-gate';
import { Spinner } from './spinner';

type AsyncWrapperProps<T> = {
  isLoading: boolean;
  isError: boolean;
  data: T | undefined;
  children: (data: T) => React.ReactNode;
  loaderSlot?: ReactNode;
  errorSlot?: ReactNode;
};

export const AsyncWrapper = <T,>({
  children,
  data,
  isLoading,
  isError,
  loaderSlot,
  errorSlot,
}: AsyncWrapperProps<T>) => {
  if (isLoading) {
    return loaderSlot ?? <Spinner />;
  }

  if (isError) {
    return errorSlot ?? <ErrorAlert error="Что то пошло не так" />;
  }

  return children(data as T);
};
