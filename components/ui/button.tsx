import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium tracking-wide transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        default:
          'border border-electric-violet/30 bg-midnight-navy/60 text-interface-grey hover:border-data-cyan/60 hover:text-data-cyan hover:bg-midnight-navy/80 hover:shadow-[0_0_24px_rgba(134,233,255,0.25)]',
        destructive:
          'border border-electric-magenta/40 bg-midnight-navy/60 text-interface-grey hover:border-electric-magenta/70 hover:text-electric-magenta hover:shadow-[0_0_24px_rgba(255,49,176,0.3)]',
        outline:
          'border border-interface-grey/40 bg-transparent text-interface-grey hover:border-data-cyan/60 hover:text-data-cyan hover:bg-midnight-navy/70 hover:shadow-[0_0_24px_rgba(134,233,255,0.2)]',
        secondary:
          'border border-core-violet/40 bg-core-violet/40 text-interface-grey hover:bg-core-violet/55',
        ghost:
          'bg-transparent text-interface-grey hover:bg-midnight-navy/60',
        link: 'text-data-cyan underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-6 py-2.5 has-[>svg]:px-5',
        sm: 'h-9 gap-1.5 px-4 has-[>svg]:px-3.5',
        lg: 'h-12 px-8 has-[>svg]:px-6',
        icon: 'size-10',
        'icon-sm': 'size-9',
        'icon-lg': 'size-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
