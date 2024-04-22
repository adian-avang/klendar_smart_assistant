import { useState } from 'react'
import Guest from './Guest'

type GuestListProps = {
  guests: { email: string }[]
  setGuests: (guests: string[]) => void
}
const GuestList = (props: GuestListProps) => {
  const { guests, setGuests } = props

  const [selectedGuests, setSelectedGuests] = useState<string[]>([])

  const handleCheckboxChange = (email: string, isChecked: boolean) => {
    if (isChecked) {
      setSelectedGuests([...selectedGuests, email])
    } else {
      setSelectedGuests(selectedGuests.filter((guest) => guest !== email))
    }
    setGuests(selectedGuests)
  }

  return (
    <div className='flex flex-col gap-2 max-h-32 overflow-y-scroll'>
      {guests.map((guest, index) => (
        <Guest
          key={index}
          email={guest.email}
          onCheckboxChange={handleCheckboxChange}
        />
      ))}
    </div>
  )
}

export default GuestList
