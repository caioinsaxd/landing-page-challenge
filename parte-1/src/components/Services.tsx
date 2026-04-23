import { ArrowIcon } from './ui/ArrowIcon'

const services = [
  {
    title: ['Search Engine', 'Optimization'],
    icon: '/SEARCH_ENGINE.svg',
    background: 'gray',
    badgeVariant: 'green',
  },
  {
    title: ['Pay-per-click', 'advertising'],
    icon: '/PAY_PER_CLICK.svg',
    background: 'green',
    badgeVariant: 'white',
  },
  {
    title: ['Social Media', 'Marketing'],
    icon: '/SOCIAL_MEDIA_MARKETING.svg',
    background: 'dark',
    badgeVariant: 'white',
    isDark: true,
  },
  {
    title: ['Email', 'Marketing'],
    icon: '/EMAIL_MARKETING.svg',
    background: 'gray',
    badgeVariant: 'green',
  },
  {
    title: ['Content', 'Creation'],
    icon: '/CONTENT_CREATION.svg',
    background: 'green',
    badgeVariant: 'white',
  },
  {
    title: ['Analytics and', 'Tracking'],
    icon: '/ANALYTICS_TRACKING.svg',
    background: 'dark',
    badgeVariant: 'white',
    isDark: true,
  },
] as const

type Service = (typeof services)[number]

const backgroundClasses: Record<Service['background'], string> = {
  gray: 'bg-gray',
  green: 'bg-green',
  dark: 'bg-dark text-gray',
}

const badgeClasses: Record<Service['badgeVariant'], string> = {
  green: 'bg-green text-black',
  white: 'bg-white text-black',
}

interface ServiceCardProps {
  title: Service['title']
  icon: Service['icon']
  background: Service['background']
  badgeVariant: Service['badgeVariant']
  isDark?: boolean
}

function ServiceCard({ title, icon, background, badgeVariant, isDark }: ServiceCardProps) {
  return (
    <div className="group rounded-[45px] border border-dark shadow-[0px_5px_0px_#191a23] transition-transform duration-300 hover:-translate-y-1">
      <div className={`h-[300px] w-full sm:h-full lg:gap-[60px] grid custom-grid lg:grid-cols-2 lg:grid-rows-1 p-8 sm:p-[50px] rounded-[45px] ${backgroundClasses[background]}`}>
        <h3 className="flex flex-col col-span-2 lg:col-span-1 gap-0">
          {title.map((word, i) => (
            <span key={i} className={`w-fit px-[7px] py-[7px] rounded-[7px] text-[30px] font-medium font-sans inline-block leading-none ${badgeClasses[badgeVariant]}`}>
              {word}
            </span>
          ))}
        </h3>
        <picture className="w-full h-full row-span-1 order-1 lg:order-none lg:row-span-2 flex justify-center items-center group-hover:scale-105 transition-transform duration-300">
          <img src={icon} alt={title.join(' ')} loading="lazy" className="h-[100px] w-auto sm:h-auto sm:w-3/4 object-cover" />
        </picture>
        <div className="flex items-end">
          <a href="https://google.com" className={`flex items-center gap-[15px] group ${isDark ? 'text-white' : 'text-black'}`}>
            <div className={`w-[41px] h-[41px] rounded-full flex items-center justify-center ${isDark ? 'bg-white' : 'bg-[#191A23]'}`}>
              <ArrowIcon color={isDark ? '#000000' : '#B9FF66'} />
            </div>
            <span className="text-[20px] font-normal font-sans leading-[28px] transition-transform duration-200 group-hover:scale-110">
              Learn more
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section className="px-5 flex justify-center overflow-hidden lg:block">
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="mt-[140px] mb-5">
          <div className="flex flex-col items-center gap-10 mb-20 sm:flex-row">
            <span className="px-[7px] py-[7px] rounded-[7px] bg-green text-black text-[40px] font-medium font-sans">
              Services
            </span>
            <p className="w-auto text-center sm:text-left sm:w-[580px]">
              At our digital marketing agency, we offer a range of services to help
              businesses grow and succeed online. These services include
            </p>
          </div>

          <div className="grid lg:grid-cols-2 lg:grid-rows-3 gap-10">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}