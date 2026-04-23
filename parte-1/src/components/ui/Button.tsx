import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-2xl text-xl font-normal leading-7 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-center border border-zinc-900',
  {
    variants: {
      variant: {
        primary: 'bg-zinc-900 text-white hover:bg-white hover:text-black',
        secondary: 'bg-transparent text-black hover:bg-black hover:text-white',
      },
      size: {
        default: 'px-9 py-5',
        sm: 'px-4 py-2',
        lg: 'px-8 py-6',
      },
    },
    defaultVariants: {
      variant: 'secondary',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean
}

export default function Button({
  className,
  variant,
  size,
  isLoading,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, size, className })}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? <span className="animate-spin">⏳</span> : children}
    </button>
  )
}