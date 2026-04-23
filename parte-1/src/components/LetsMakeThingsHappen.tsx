import Button from './ui/Button'

export default function LetsMakeThingsHappen() {
  return (
    <section className="px-5 flex justify-center overflow-hidden lg:block">
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="rounded-[45px]">
          <div className="flex bg-[#F3F3F3] rounded-[45px] p-[60px] relative mt-[123px] mb-[163px]">
            <div className="w-full md:w-[40%] flex flex-col gap-[26px]">
              <h2 className="text-3xl font-medium">Let's make things happen</h2>
              <p>
                Contact us today to learn more about how our digital marketing
                services can help your business grow and succeed online.
              </p>
              <Button variant="primary">Get your free proposal</Button>
            </div>
            <picture className="hidden md:flex absolute right-[-10%] lg:right-0 top-[-15%] h-[450px] items-center justify-center group">
              <img
                src="/LETS_MAKE_THINGS.svg"
                alt="This is an illustration"
                loading="lazy"
                className="hidden md:flex lg:h-full lg:w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  )
}