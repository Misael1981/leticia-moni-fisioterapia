import AboutCardOne from "./components/AboutCardOne"
import AboutCardTwo from "./components/AboutCardTwo"

const AboutSection = () => {
  return (
    <section className="flex w-full items-center justify-center p-4">
      <div className="w-full max-w-6xl flex-col items-center justify-center gap-8 md:flex lg:flex-row">
        <AboutCardOne />

        <AboutCardTwo />
      </div>
    </section>
  )
}

export default AboutSection
