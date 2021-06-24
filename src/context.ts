import { createContext } from 'react'

export const SSRContext = createContext<{
  initialData: any
  url: Record<string, Record<'data', any>>
  $ssrErrorMsg?: string
}>({} as any)

const { Provider, Consumer } = SSRContext

export const SSRProvider = Provider
export const SSRConsumer = Consumer
