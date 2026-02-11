'use server'
import { z } from 'zod'
import { redirect } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'
const payload = await getPayload({ config })
import { cookies } from 'next/headers'
import { formatUrl } from './string-methods'

const tokenCookieName = 'payload-token'
const webUrl = process.env.WEBSITE_URL
export async function login(initialState: any, formData: FormData) {
  'use server'

  const rawData = {
    email: String(formData.get('email')),
    // password: String(formData.get('password')),
  }

  const schema = z.object({
    email: z.email(),
    // password: z.string(),
  })

  let result

  const validatedFields = schema.safeParse({
    email: rawData.email,
    // password: rawData.password,
  })

  if (!validatedFields.success) {
    console.log('error validating')
    return {
      message: 'E-mail není ve správném formátu!', //errors: validatedFields.error.flatten().fieldErrors,
    }
  }
  try {
    const token = await payload.forgotPassword({
      collection: 'users', // required
      data: {
        // required
        email: validatedFields.data.email,
      },
      disableEmail: true,
      //req: req, // pass a Request object to be provided to all hooks
    })
    console.log(token)

    const loginUrl = `${webUrl}/login/${token}`
    if (webUrl) {
      const prettyUrl = formatUrl(webUrl)
      const email = await payload.sendEmail({
        to: validatedFields.data.email,
        subject: 'Přihlášení na vylety.bacul.cz',
        text: `Ahoj, \npro přihlášení na web ${prettyUrl} použij následující odkaz:\n${loginUrl}\nKdyby nefungoval, zkopíruj ho do prohlížeče ručně.`,
        html: `Ahoj,<br>pro přihlášení na web ${prettyUrl} použij následující odkaz:<br><a href="${webUrl}/login/${token}">${webUrl}/login/${token}</a><br>Kdyby nefungoval, zkopíruj ho do prohlížeče ručně.`,
      })
    }

    //console.log(result)
  } catch (err: any) {
    console.error(err)
  }

  /* 
  if (result && result.token) {
    const cookieStore = await cookies()
    cookieStore.set(tokenCookieName, result?.token, {
      path: '/',
      httpOnly: true,
    })
    redirect('/')
  }
 */
  return { message: 'Zkontroluj si e-mailovou schránku.' }
}

export async function logout() {
  const cookieStore = await cookies()
  cookieStore.delete(tokenCookieName)
  redirect('/login')
}
