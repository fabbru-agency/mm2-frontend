import SectionTitle from '../misc/SectionTitle'

export default function Projects() {
  return (
    <section id="projects" className="py-40">
      <div className="container mx-auto">
        <SectionTitle className="text-center">Projectos</SectionTitle>
        <div className="mt-16 columns-2 md:columns-2 lg:columns-3">
          <img className="mb-4" src="https://source.unsplash.com/random/1" />
          <img className="mb-4" src="https://source.unsplash.com/random/2" />
          <img className="mb-4" src="https://source.unsplash.com/random/3" />
          <img className="mb-4" src="https://source.unsplash.com/random/4" />
          <img className="mb-4" src="https://source.unsplash.com/random/5" />
          <img className="mb-4" src="https://source.unsplash.com/random/6" />
        </div>
      </div>
    </section>
  )
}
