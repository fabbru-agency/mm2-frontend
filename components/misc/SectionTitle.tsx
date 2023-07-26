import { ReactNode } from 'react'
import classNames from 'classnames'

interface ISectionTitleProps {
  children: ReactNode
  className?: string
}

export default function SectionTitle({
  children,
  className,
}: ISectionTitleProps) {
  return (
    <h2 className={classNames('text-4xl font-bold', className)}>{children}</h2>
  )
}
