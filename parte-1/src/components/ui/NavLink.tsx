import { cva, type VariantProps } from 'class-variance-authority'

const navLinkVariants = cva(
  'block py-2 px-3 text-black rounded lg:bg-transparent lg:p-0 font-medium transition-colors hover:text-gray-600',
  {
    variants: {
      variant: {
        default: '',
        mobile: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface NavLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof navLinkVariants> {
  href: string
}

export default function NavLink({
  className,
  variant,
  href,
  children,
  ...props
}: NavLinkProps) {
  return (
    <a
      href={href}
      className={navLinkVariants({ variant, className })}
      {...props}
    >
      {children}
    </a>
  )
}