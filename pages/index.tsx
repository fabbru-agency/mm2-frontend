import { ISanityContent } from '@/types/Sanity'
import { NextSeo } from 'next-seo'

import About from '@/components/sections/About'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Projects from '@/components/sections/Projects'


export default function Page({ projects }: ISanityContent) {
  return (
    <>
      <NextSeo
          title="Home Page Title"
          description="Home page description of the page"
      />
      <Hero />
      <About />
      <Services />
      <Projects />
    </>
  )
}

export async function getStaticProps() {
  const projects: Array<any> = []
  // const projects = await sanityClient.fetch(`*[_type == "project"]`);

  return {
    props: {
      projects,
    },
  }
}
