import { ref, Ref } from 'vue'
import useApi from '../api'

export interface Category {
  id: string
  title: string
  description: string
  image: string
}

export type MaybeCategories = Category[] | undefined

export type CategoriesComposition = {
  categories: Ref<MaybeCategories>
}

export default async function useCategories() {
  const { response: categories, request } = useApi<MaybeCategories>(
    'https://ecomm-categories.modus.workers.dev/'
  )
  const loaded = ref(false)

  if (loaded.value === false) {
    try {
      await request()
      loaded.value = true
    } catch (e) {
      console.error(e)
    }
  }

  return { categories } as CategoriesComposition
}
