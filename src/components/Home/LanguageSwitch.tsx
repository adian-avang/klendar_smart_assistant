'use client'

import { Switch } from '@/components/ui/switch'
import { useState } from 'react'

const LanguageSwitch = ({ locale }: { locale: string }) => {
  const [isActive, setIsActive] = useState<boolean>(
    locale === 'en' ? true : false
  )

  const handleChange = () => {
    setIsActive(!isActive)
  }
  return (
    <div className='absolute flex gap-4 top-8 right-8'>
      <p className='text-xl text-white'>es</p>
      <Switch
        checked={isActive}
        onCheckedChange={handleChange}
      ></Switch>
      <p className='text-xl text-white'>en</p>
    </div>
  )
}

export default LanguageSwitch
