import { sanityClient } from "@/lib/sanity";
import { ISanityContent } from "@/types/Sanity";

export default function Page({ projects }: ISanityContent) {
  return <div>Hello, Next.js!</div>
}

export async function getStaticProps() {
  const projects = await sanityClient.fetch(`*[_type == "project"]`);
  console.log('projects: ', projects)

  return {
    props: {
      projects
    }
  }
}