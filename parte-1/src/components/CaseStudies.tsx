import { ArrowIcon } from './ui/ArrowIcon'

const caseStudies = [
  {
    description: 'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
  },
  {
    description: 'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.',
  },
  {
    description: 'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.',
  },
]

interface CaseCardProps {
  description: string
  className?: string
}

function CaseCard({ description, className = '' }: CaseCardProps) {
  return (
    <div className={`flex flex-col justify-between gap-5 ${className}`}>
      <p>{description}</p>
      <a href="https://google.com" className="flex items-center gap-[15px] group">
        <span className="text-green transition-transform duration-200 group-hover:scale-110">Learn more</span>
        <ArrowIcon />
      </a>
    </div>
  )
}

export default function CaseStudies() {
  return (
    <section className="px-5 flex justify-center overflow-hidden lg:block">
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="flex flex-col items-center gap-10 mb-20 sm:flex-row">
          <span className="px-[7px] py-[7px] rounded-[7px] bg-green text-black text-[40px] font-medium font-sans">
            Case Studies
          </span>
          <p className="w-auto text-center sm:text-left sm:w-[580px]">
            Explore Real-Life Examples of Our Proven Digital Marketing Success
            through Our Case Studies
          </p>
        </div>

        <div className="rounded-[45px] bg-dark text-gray overflow-hidden">
          <div className="hidden lg:flex items-stretch p-[60px]">
            {caseStudies.map((study, index) => (
              <div key={index} className="flex-1 flex items-stretch">
                <CaseCard description={study.description} />
                {index < caseStudies.length - 1 && <div className="w-[1px] bg-white mx-[60px]" />}
              </div>
            ))}
          </div>

          <div className="lg:hidden">
            {caseStudies.map((study, index) => (
              <div key={index} className="p-[30px] border-b border-white/20 last:border-b-0">
                <CaseCard description={study.description} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}