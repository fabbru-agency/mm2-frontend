import Link from 'next/link'
import FacebookSVG from '../misc/FacebookSVG'
import InstagramSVG from '../misc/InstagramSVG'
import YoutubeSVG from '../misc/YoutubeSVG'

interface IFooterProps {}

export default function Footer({}: IFooterProps) {
  return (
    <footer
      className="pt-12 pb-6 text-center text-white relative"
      style={{
        backgroundImage: `url('/images/footer.png')`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black-500 z-10"></div>
      <div className="container mx-auto z-20 relative">
        <h4 className="text-xl font-semibold">Contactos</h4>

        <div className="flex flex-col gap-3 mt-8">
          <Link href="mailto:email@email.com">email@email.com</Link>
          <Link href="tel:910000000">910000000</Link>
          <Link href="https://maps.google.com">
            Rua do sitio, Cidade, Portugal
          </Link>
        </div>

        <div className="flex gap-6 justify-center items-center mt-20">
          <Link href="https://facebook.com" target="_blank">
            <FacebookSVG />
          </Link>
          <Link href="https://facebook.com" target="_blank">
            <InstagramSVG />
          </Link>

          <Link href="https://facebook.com" target="_blank">
            <YoutubeSVG />
          </Link>
        </div>

        <div className="flex justify-between items-center mt-2">
          <span>all rights reserved @ mm2</span>
          <span>
            developed by{' '}
            <Link href="https://fabbru-agency" target="_blank">
              fabbru
            </Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
