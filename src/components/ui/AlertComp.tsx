import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type ErrorProps = {
  error: string;
};

export function AlertDestructive({ error }: ErrorProps) {
  return (
    <Alert variant="destructive" className="mt-28">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>{error}</AlertDescription>
    </Alert>
  );
}
