import { ref, Ref } from 'vue'

export type ApiResponse = Ref<undefined | object | Array<object>>

export type ApiError = Ref<undefined | Error>

export type ApiRequest = () => Promise<void>

export interface ApiComposition {
  response: ApiResponse
  error: ApiError
  request: ApiRequest
}

export default function useApi<T>(url: RequestInfo, options?: RequestInit) {
  const response: Ref<T | undefined> = ref()
  const error: ApiError = ref(undefined)

  const request = async () => {
    try {
      const res = await fetch(url, options)
      const json = await res.json()
      response.value = json
    } catch (errors) {
      error.value = errors
    }
  }
  return { response, error, request } as {
    response: Ref<T>
    error: ApiError
    request: ApiRequest
  }
}
