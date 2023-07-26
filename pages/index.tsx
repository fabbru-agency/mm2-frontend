import Hero from '@/components/Hero'
import { sanityClient } from '@/lib/sanity'
import { ISanityContent } from '@/types/Sanity'
import { NextSeo } from 'next-seo'

export default function Page({ projects }: ISanityContent) {
  return (
    <>
      <NextSeo
          title="Home Page Title"
          description="Home page description of the page"
      />
      <Hero />
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
