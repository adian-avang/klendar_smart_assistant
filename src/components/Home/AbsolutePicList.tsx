import picList from '@/utils/staticHomeInfo'
import AbsolutePic from './AbsolutePic'

const AbsolutePicList = () => {
  return (
    <>
      {picList.map((picture, index) => (
        <AbsolutePic
          key={index}
          {...picture}
        />
      ))}
    </>
  )
}

export default AbsolutePicList
