import Image from 'next/image'
export default function Arquitecture() {
  return (
    <div className="mt-8 flex gap-6 items-center justify-center">
      <div className="max-w-3xl">
        <p>
          Arquitecture ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum
          curabitur vitae nunc sed velit dignissim sodales ut. Scelerisque felis
          imperdiet proin fermentum Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <p className="mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum
          curabitur vitae nunc. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt.
        </p>
        <p className="mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum
          curabitur vitae nunc sed velit dignissim sodales ut. Scelerisque felis
          imperdiet proin fermentum Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
      </div>

      <Image
        src="/images/about-us.png"
        alt="Interior Design"
        width="0"
        height="0"
        sizes="100vw"
        className="w-[280px] h-[305px] object-cover"
      />
    </div>
  )
}
