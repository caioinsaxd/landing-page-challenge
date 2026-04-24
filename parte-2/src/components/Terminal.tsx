import { useState, useEffect } from 'react'

const pythonCode = `# Projeto: Analisador de Currículos com IA
import openai
from asimov import Pipeline

pipeline = Pipeline("cv-analyser")
pipeline.load_model("gpt-4-turbo")

print("🔍 Analisando currículos...")
results = pipeline.analyze()

# Gerar ranking dos candidatos
ranking = sorted(results, key=lambda x: x.score)

for i, candidate in enumerate(ranking[:5], 1):
    print(f"{i}. {candidate.name} — Score: {candidate.score}")

pipeline.export("resultados.xlsx")
print("📊 Relatório exportado!")`

const TYPING_SPEED_MS = 20
const PAUSE_DURATION_MS = 4000
const TERMINAL_COLORS = {
  background: '#0f172a',
  headerBg: '#1e293b',
  border: '#334155',
  muted: '#64748b',
} as const

interface TerminalProps {
  primaryColor?: string
  primaryDim?: string
  started?: boolean
}

export default function Terminal({ primaryColor = '#A3FF6A', primaryDim = 'rgba(163, 255, 106, 0.1)', started = true }: TerminalProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (!started) return
    
    if (currentIndex < pythonCode.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(pythonCode.slice(0, currentIndex + 1))
        setCurrentIndex(prev => prev + 1)
      }, TYPING_SPEED_MS)
      return () => clearTimeout(timeout)
    } else {
      setIsComplete(true)
      const timeout = setTimeout(() => {
        setDisplayedText('')
        setCurrentIndex(0)
        setIsComplete(false)
      }, PAUSE_DURATION_MS)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, started])

  return (
    <div className="relative w-full animate-terminal-float">
      <div 
        className="absolute inset-0 blur-[80px] rounded-full" 
        style={{ backgroundColor: primaryDim }}
      />
      <div 
        className="relative border rounded-2xl overflow-hidden shadow-2xl"
        style={{ backgroundColor: TERMINAL_COLORS.background, borderColor: TERMINAL_COLORS.border }}
      >
        <div 
          className="flex items-center gap-2 px-4 py-3 border-b"
          style={{ backgroundColor: TERMINAL_COLORS.headerBg, borderColor: TERMINAL_COLORS.border }}
        >
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: primaryColor }} />
          <span className="ml-2 text-xs" style={{ color: TERMINAL_COLORS.muted }}>python — asimov</span>
        </div>
        <div 
          className="p-4 text-sm font-mono leading-relaxed min-h-[320px]"
          style={{ backgroundColor: TERMINAL_COLORS.background }}
        >
          <pre style={{ color: primaryColor, whiteSpace: 'pre-wrap' }}>
            {displayedText}
          </pre>
          {displayedText.length === 0 && (
            <span style={{ color: TERMINAL_COLORS.muted }}>...</span>
          )}
          {!isComplete && (
            <span 
              className="inline-block w-2 h-4 ml-1 animate-pulse" 
              style={{ backgroundColor: primaryColor }} 
            />
          )}
        </div>
      </div>
    </div>
  )
}