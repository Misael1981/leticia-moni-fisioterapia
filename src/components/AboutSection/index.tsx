import AboutCardOne from "./components/AboutCardOne"
import AboutCardTwo from "./components/AboutCardTwo"

const AboutSection = () => {
  return (
    <section className="flex w-full items-center justify-center p-4">
      <div className="flex w-full max-w-5xl flex-col items-center justify-center gap-8 lg:flex-row">
        <AboutCardOne />

        <AboutCardTwo />
      </div>
    </section>
  )
}

export default AboutSection
