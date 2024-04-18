import clsx from 'clsx'
import Image, { StaticImageData } from 'next/image'
import { CSSProperties, FC } from 'react'

interface AbsolutePicProps {
  top?: string
  left?: string
  right?: string
  bottom?: string
  picture: StaticImageData
  alt: string
  priority?: boolean
  extraCss?: string
}
const AbsolutePic: FC<AbsolutePicProps> = ({
  top,
  left,
  right,
  bottom,
  picture,
  alt,
  priority = false,
  extraCss = '',
}) => {
  const style: CSSProperties = {
    position: 'absolute',
    top: top !== undefined ? `${top}` : undefined,
    left: left !== undefined ? `${left}` : undefined,
    right: right !== undefined ? `${right}` : undefined,
    bottom: bottom !== undefined ? `${bottom}` : undefined,
  }
  return (
    <div
      style={style}
      className={clsx({
        'hidden md:block': extraCss === 'hide',
        'hidden lg:block': extraCss === 'hide-md',
      })}
    >
      <Image
        src={picture}
        alt={alt}
        priority={priority}
      />
    </div>
  )
}

export default AbsolutePic
