import { useState } from 'react'
import { ArrowRightIcon } from './Icons'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'default' | 'lg'
  isLoading?: boolean
  showArrow?: boolean
  primaryColor?: string
  borderColor?: string
}

const sizeClasses = {
  sm: 'px-5 py-3 text-sm',
  default: 'px-7 py-4 text-base',
  lg: 'px-9 py-5 text-lg',
}

export default function Button({
  className,
  variant = 'primary',
  size = 'default',
  isLoading,
  showArrow = false,
  primaryColor = '#A3FF6A',
  borderColor = '#334155',
  children,
  disabled,
  ...props
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const isPrimary = variant === 'primary'

  const baseStyles: React.CSSProperties = {
    backgroundColor: isPrimary 
      ? (isHovered ? 'white' : primaryColor) 
      : (isHovered ? '#1e293b' : 'transparent'),
    color: isPrimary 
      ? (isHovered ? '#020617' : '#020617') 
      : (isHovered ? '#f8fafc' : '#f8fafc'),
    border: `1px solid ${isPrimary ? (isHovered ? 'white' : primaryColor) : (isHovered ? '#64748b' : borderColor)}`,
  }

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 ${sizeClasses[size]} ${className || ''}`}
      style={baseStyles}
      disabled={isLoading || disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {isLoading ? (
        <span className="animate-spin">⟳</span>
      ) : (
        <>
          {children}
          {showArrow && <ArrowRightIcon className="w-5 h-5" />}
        </>
      )}
    </button>
  )
}