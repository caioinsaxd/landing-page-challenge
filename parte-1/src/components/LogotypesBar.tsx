const logos = [
  { src: '/AMAZON.svg', alt: 'Amazon' },
  { src: '/DRIBBLE.svg', alt: 'Dribble' },
  { src: '/HUBSPOT.svg', alt: 'HubSpot' },
  { src: '/NOTION.svg', alt: 'Notion' },
  { src: '/NETFLIX.svg', alt: 'Netflix' },
  { src: '/ZOOM.svg', alt: 'Zoom' },
]

export default function LogotypesBar() {
  return (
    <section className="px-5 flex justify-center overflow-hidden lg:block">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex items-center justify-between px-[100px] h-12">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-12 w-auto opacity-85 grayscale hover:grayscale-0 hover:scale-110 transition-all duration-200"
            />
          ))}
        </div>
      </div>
    </section>
  )
}