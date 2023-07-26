import Link from 'next/link'
import PlusSVG from './PlusSVG'
import classNames from 'classnames'

export default function ButtonComponent({ className }: any) {
  return (
    <div className="group">
      <Link
        className={classNames(
          ' flex py-3 px-8 gap-2 rounded-lg justify-between items-center border-2 border-beige w-fit transition-all duration-500 group-hover:bg-beige',
          className
        )}
        href="/"
      >
        <span className="group-hover:text-white">Ver mais </span>
        <PlusSVG className="group-hover:stroke-white" />
      </Link>
    </div>
  )
}
