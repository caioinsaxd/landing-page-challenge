import { useState, useEffect } from 'react'
import Button from './ui/Button'
import { CheckIcon } from './ui/Icons'
import Terminal from './Terminal'
import { useTheme } from '../theme/ThemeProvider'

function isLightColor(hex: string): boolean {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.6
}

const floatingCodeTexts = [
  { text: 'import python', delay: 0 },
  { text: 'def aprender():', delay: -1 },
  { text: 'return sucesso', delay: -2 },
  { text: 'while True:', delay: -3 },
  { text: 'asimov.academy', delay: -4 },
  { text: '{ IA, Python }', delay: -5 },
  { text: 'print("code")', delay: -6 },
  { text: 'for i in range:', delay: -7 },
]

const floatingCodePositions = [
  { position: 'top-[12%] left-[3%]', xFactor: 15, yFactor: 10 },
  { position: 'top-[20%] right-[3%]', xFactor: -12, yFactor: 8 },
  { position: 'top-[40%] left-[2%]', xFactor: 10, yFactor: -12 },
  { position: 'top-[55%] right-[5%]', xFactor: -8, yFactor: 15 },
  { position: 'bottom-[35%] left-[4%]', xFactor: 12, yFactor: -10 },
  { position: 'bottom-[20%] right-[4%]', xFactor: -15, yFactor: 8 },
  { position: 'bottom-[45%] left-[8%]', xFactor: 8, yFactor: 12 },
  { position: 'top-[30%] right-[12%]', xFactor: -10, yFactor: -8 },
]

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const headlineText = 'Aprenda Python do zero e construa projetos reais com IA'
const headlineAccentLength = 'projetos reais com IA'.length
const subheadlineText = 'O curso mais prático do Brasil para quem quer entrar em tecnologia sem enrolação'

const bullets = [
  '+40 horas de conteúdo direto ao ponto',
  'Projetos com Python + IA desde o módulo 1',
  'Suporte da comunidade com +20.000 alunos',
  'Certificado reconhecido pelo mercado',
]

function TypingHeadline({ primaryColor, onComplete }: { primaryColor: string; onComplete?: () => void }) {
  const [displayedLength, setDisplayedLength] = useState(0)

  useEffect(() => {
    if (displayedLength < headlineText.length) {
      const timeout = setTimeout(() => {
        setDisplayedLength(prev => prev + 1)
      }, 35)
      return () => clearTimeout(timeout)
    } else if (onComplete) {
      onComplete()
    }
  }, [displayedLength, onComplete])

  const accentStartIndex = headlineText.length - headlineAccentLength

  return (
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6 min-h-[2.8em] md:min-h-[3.4em] lg:min-h-[3.4em]">
      <span className="sr-only">{headlineText}</span>
      <span aria-hidden="true" className="block">
        {headlineText.split('').map((char, i) => {
          const isTyped = i < displayedLength
          const isAccent = i >= accentStartIndex
          return (
            <span key={i} className="relative">
              <span 
                style={{ 
                  color: isTyped ? (isAccent ? primaryColor : 'white') : 'transparent',
                }}
              >
                {char}
              </span>
              <span 
                className="absolute -right-1 top-0 h-[1em] w-0.5"
                style={{ 
                  backgroundColor: primaryColor,
                  opacity: (i === displayedLength - 1 && displayedLength < headlineText.length) ? 1 : 0,
                  animation: (i === displayedLength - 1 && displayedLength < headlineText.length) ? 'none' : undefined
                }}
              />
            </span>
          )
        })}
        <span 
          className="inline-block w-0.5 h-[1em] ml-1 align-middle"
          style={{ 
            backgroundColor: primaryColor,
            animation: displayedLength >= headlineText.length ? 'cursor-blink 1s ease-in-out infinite' : 'none',
            opacity: displayedLength >= headlineText.length ? 1 : 0
          }}
        />
      </span>
    </h1>
  )
}

function FloatingCode({ text, delay, position, mousePos, primaryColor, xFactor, yFactor }: { text: string; delay: number; position: string; mousePos: { x: number; y: number }; primaryColor: string; xFactor: number; yFactor: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className={`absolute font-mono text-xs md:text-sm whitespace-nowrap cursor-default transition-all duration-300 ${position}`}
      style={{ 
        color: primaryColor,
        opacity: isHovered ? 1 : 0.25,
        textShadow: isHovered ? `0 0 20px ${primaryColor}` : 'none',
        animation: `float-code 8s ease-in-out infinite ${delay}s`,
        transform: `translate(${mousePos.x * xFactor}px, ${mousePos.y * yFactor}px)`,
        transition: 'transform 0.3s ease-out, color 0.3s, opacity 0.3s, text-shadow 0.3s',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </div>
  )
}

const TERMINAL_START_DELAY = 1000

export default function Hero() {
  const { theme } = useTheme()
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [typingComplete, setTypingComplete] = useState(false)
  const [randomizedCodes, setRandomizedCodes] = useState<typeof floatingCodeTexts>([])
  const [randomizedPositions, setRandomizedPositions] = useState<typeof floatingCodePositions>([])

  const handleTypingComplete = () => {
    setTimeout(() => setTypingComplete(true), TERMINAL_START_DELAY)
  }

  useEffect(() => {
    setRandomizedCodes(shuffleArray([...floatingCodeTexts]))
    setRandomizedPositions(shuffleArray([...floatingCodePositions]))
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      setMousePos({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: theme.background }}
    >
      <div 
        className="absolute inset-0"
        style={{ background: `linear-gradient(to bottom, ${theme.background}, ${theme.card})` }}
      />
      
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-[150px]"
        style={{ 
          backgroundColor: theme.primaryFaint,
          transform: `translate(-50%, 0) translate(${mousePos.x * -30}px, ${mousePos.y * -20}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      />
      
      <div 
        className="absolute top-1/4 right-0 w-96 h-96 border rounded-full opacity-20"
        style={{ 
          borderColor: theme.border,
          transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 15}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      />
      
      <div 
        className="absolute bottom-1/4 left-0 w-64 h-64 border border-gray-800 rounded-full opacity-20"
        style={{ 
          borderColor: theme.border,
          transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -10}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      />

      {randomizedCodes.map((item, i) => (
        <FloatingCode 
          key={i} 
          text={item.text} 
          delay={item.delay} 
          position={randomizedPositions[i]?.position || 'top-[20%] left-[10%]'} 
          xFactor={randomizedPositions[i]?.xFactor || 10}
          yFactor={randomizedPositions[i]?.yFactor || 10}
          mousePos={mousePos}
          primaryColor={theme.primary}
        />
      ))}

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 py-24 md:py-32">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <span 
              className="flex items-center justify-center h-10 w-10 rounded-md"
              style={{ backgroundColor: theme.primary }}
            >
              <img 
                src="/A.svg" 
                alt="A" 
                className="h-7 w-auto"
                style={{ 
                  filter: isLightColor(theme.primary) ? 'none' : 'brightness(0) invert(1)' 
                }}
              />
            </span>
            <img 
              src="/ASIMOV.svg" 
              alt="Asimov" 
              className="h-20 w-auto"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>
          <p style={{ color: theme.textMuted }} className="text-lg">
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: theme.primary }} />
              A maior escola de Python e IA do Brasil
            </span>
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <TypingHeadline primaryColor={theme.primary} onComplete={handleTypingComplete} />

            <p className="text-lg md:text-xl mb-10 max-w-xl mx-auto lg:mx-0 animate-text-float-delay" style={{ color: theme.textMuted }}>
              {subheadlineText}
            </p>

            <ul className="flex flex-col gap-4 mb-10 max-w-md mx-auto lg:mx-0 animate-text-float-delay-2">
              {bullets.map((text, i) => (
                <li key={i} className="flex items-start gap-3" style={{ color: theme.textMuted }}>
                  <span className="flex-shrink-0 mt-0.5">
                    <CheckIcon className="w-5 h-5" style={{ color: theme.primary }} />
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-text-float-delay-3">
              <Button variant="primary" size="lg" showArrow primaryColor={theme.primary}>
                Quero começar agora
              </Button>
              <Button variant="secondary" size="lg" borderColor={theme.border}>
                Ver o que vou aprender
              </Button>
            </div>
          </div>

          <div className="flex-1 w-full">
            <Terminal primaryColor={theme.primary} primaryDim={theme.primaryDim} started={typingComplete} />
          </div>
        </div>
      </div>
    </section>
  )
}