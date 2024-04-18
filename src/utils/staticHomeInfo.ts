import responsiveCalendar from '@/assets/Responsive Calendar.png'
import smallCalendar from '@/assets/Frame 65.png'
import smallCalendar2 from '@/assets/Responsive Calendar (2).png'
import smallCalendar3 from '@/assets/Responsive Calendar (1).png'
import smallCalendar4 from '@/assets/Responsive Calendar (3).png'

const picList = [
  {
    picture: responsiveCalendar,
    alt: 'calendar pic',
    priority: true,
    top: undefined,
    left: undefined,
    bottom: '0%',
    right: '0%',
  },
  {
    picture: smallCalendar,
    alt: 'small calendar',
    top: '30%',
    left: undefined,
    bottom: undefined,
    right: '5%',
    extraCss: 'hide',
  },
  {
    picture: smallCalendar2,
    alt: 'small calendar 2',
    top: undefined,
    left: undefined,
    bottom: '0%',
    right: '0%',
    extraCss: 'hide',
  },
  {
    picture: smallCalendar3,
    alt: 'small calendar 3',
    top: undefined,
    left: '1%',
    bottom: '0%',
    right: undefined,
    extraCss: 'hide',
  },
  {
    picture: smallCalendar4,
    alt: 'small calendar 4',
    top: undefined,
    left: '40%',
    bottom: '0%',
    right: undefined,
    extraCss: 'hide-md',
  },
]

export default picList
