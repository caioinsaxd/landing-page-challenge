interface LogoProps {
  href?: string
}

export default function Logo({ href = '/' }: LogoProps) {
  return (
    <a href={href} className="flex items-center">
      <img src="/Logo.svg" alt="Positivus" className="h-8 w-auto" />
    </a>
  )
}