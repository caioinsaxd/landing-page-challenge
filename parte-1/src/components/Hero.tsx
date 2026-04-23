import Button from './ui/Button'
import LogotypesBar from './LogotypesBar'

export default function Hero() {
  return (
    <section className="px-5 flex justify-center overflow-hidden lg:block">
      <div className="w-full max-w-[1280px] mx-auto pt-20 md:pt-24">
        <div className="relative flex flex-col-reverse items-center md:flex-row" id="hero">
          <div className="row items-center py-5 md:w-6/12 md:pb-20 md:pt-10">
            <div className="text-left space-y-3">
              <h1 className="text-4xl font-medium leading-tight md:text-6xl text-center md:text-left">
                Navigating the <br />
                digital landscape <br />
                for success
              </h1>
              <p className="mt-6 mb-8 text-lg font-normal leading-7 sm:mb-12 text-center md:text-left md:pr-12">
                Our digital marketing agency helps businesses grow and succeed online through
                a range of services including SEO, PPC, social media marketing,
                and content creation.
              </p>
              <div className="w-full justify-center md:justify-start items-center inline-flex">
                <Button variant="primary">Book a consultation</Button>
              </div>
            </div>
          </div>
          <div className="flex items-center py-5 md:w-6/12 md:pb-20 md:pt-10 group">
            <img
              src="/Hero.svg"
              alt="Hero Illustration"
              loading="eager"
              className="w-full max-w-[601px] h-auto transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
        <LogotypesBar />
      </div>
    </section>
  )
}