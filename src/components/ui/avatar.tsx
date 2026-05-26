import Image from 'next/image';
import * as React from 'react';
import { cn } from '@/utils/cn';

export type AvatarProps = {
  src?: string;
  fallback?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, fallback, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-muted',
        className,
      )}
      {...props}
    >
      {src ? (
        <Image
          src={src}
          alt="Avatar"
          width={40}
          height={40}
          unoptimized
          className="aspect-square h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded-full bg-primary text-primary-foreground">
          {fallback ?? 'U'}
        </div>
      )}
    </div>
  ),
);
Avatar.displayName = 'Avatar';

export { Avatar };
