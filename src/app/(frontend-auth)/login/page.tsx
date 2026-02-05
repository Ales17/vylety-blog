'use client'
import { login } from 'lib/fe-auth'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  return (
    <div>
      <input type="email" onChange={(e) => setEmail(e.target.value)} name="" id="" />
      <input type="password" onChange={(e) => setPassword(e.target.value)} name="" id="" />
      <button
        onClick={async () => {
          const { success } = await login(email, password)
          if (success) {
            router.push('/')
          }
        }}
      >
        Přihlásit
      </button>
    </div>
  )
}
