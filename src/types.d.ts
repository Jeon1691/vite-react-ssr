import $React, { FC } from 'react'
import { IncomingMessage } from 'http'
import { RouteComponentProps } from 'react-router'
declare global {
  export interface Window {
    [K: string]: any
  }

  export const React: typeof $React
  export const __DEV__: boolean
  export type KV = Record<string, any>

  export type SSRPage<P = unknown> = {
    loadData?: (ctx: {
      isSSR: boolean
      url: string
      query?: KV
      params?: KV
      req: IncomingMessage
    }) => Promise<{ redirect?: string } & P>
  } & FC<
    { data: P } & RouteComponentProps & {
        ssr: KV
        ssrCurrent: boolean
        loaded: boolean
      }
  >
}

export {}
