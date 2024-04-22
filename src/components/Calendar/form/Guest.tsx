import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { useState } from 'react'

type GuestProps = {
  email: string
  onCheckboxChange: (email: string, isChecked: boolean) => void
}
const Guest = (props: GuestProps) => {
  const { email, onCheckboxChange } = props

  const [isChecked, setIsChecked] = useState<boolean>(false)

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked
    setIsChecked(newCheckedState)
    onCheckboxChange(email, newCheckedState)
  }

  return (
    <div className='flex items-center space-x-2'>
      <Checkbox
        id={email}
        checked={isChecked}
        onCheckedChange={handleCheckboxChange}
      />
      <Label htmlFor={email}>{email}</Label>
    </div>
  )
}

export default Guest
