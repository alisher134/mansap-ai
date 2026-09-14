import { Link } from 'react-router';
import { Button } from '@/shared/ui/button';

export function NotFoundPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-medium">Page not found</h1>
      <Button asChild>
        <Link to="/">Go home</Link>
      </Button>
    </div>
  );
}
