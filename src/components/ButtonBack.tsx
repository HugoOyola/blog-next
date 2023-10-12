"use client"

import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const ButtonBack = ({children}: Props) => {
  const router = useRouter()

  return (
    <button onClick={()=>router.back()} className="mt-4 text-blue-600 hover:underline">{children}</button>
  )
}

export default ButtonBack