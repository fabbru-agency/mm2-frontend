import Image from 'next/image'
import SectionTitle from '../misc/SectionTitle'

export default function About() {
  return (
    <section id="about" className="py-40">
      <div className="container mx-auto">
        <SectionTitle className="text-center">
          Aqui o detalhe é levado ao <br />
          <span className="text-blue">milímetro</span>
        </SectionTitle>

        <div className="mt-10 max-w-3xl mx-auto text-sm font-light  text-gray">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Elementum curabitur vitae nunc sed velit dignissim sodales ut.
            Scelerisque felis imperdiet proin fermentum Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </p>
          <p className="mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Elementum curabitur vitae nunc. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
        </div>
      </div>

      <div className="w-full h-[520px] relative mt-24">
        <Image
          src="/images/about-us.png" 
          alt="About us"
          layout='fill'
          objectFit='cover'
        />
      </div>
    </section>
  )
}
