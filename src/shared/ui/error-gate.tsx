import { Alert, AlertTitle } from './alert';

type ErrorAlertProps = {
  error: string | null | undefined;
  className?: string;
};

export const ErrorAlert = ({ error, className }: ErrorAlertProps) => {
  if (!error) return null;

  return (
    <Alert variant="destructive" className={className}>
      <AlertTitle>{error}</AlertTitle>
    </Alert>
  );
};
