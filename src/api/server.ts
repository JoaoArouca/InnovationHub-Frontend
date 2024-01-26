import { setupWorker } from 'msw/browser'
import { handlers } from './handlers'
import { env } from '../lib/env'

export const worker = setupWorker(...handlers)

export async function enableMSW() {
  if (env.MODE !== 'production') {
    await worker.start({
      onUnhandledRequest: 'bypass',
    })
  }
}
