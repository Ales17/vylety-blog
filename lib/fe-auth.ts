'use server'
import { redirect } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'
const payload = await getPayload({ config })

interface Props {
  success: boolean
}

export async function login(email: string, password: string) {
  try {
    await payload.login({
      collection: 'users', // required
      data: {
        // required
        email: email,
        password: password,
      },
      //req: req, // optional, pass a Request object to be provided to all hooks
      depth: 2,
      locale: 'en',
      //fallbackLocale: false,
      overrideAccess: false,
      showHiddenFields: true,
    })

    return {
      success: true,
    }
  } catch (err: any) {
    return {
      success: false,
    }
  }
}
