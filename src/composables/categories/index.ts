import { ref, Ref, readonly } from 'vue'
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
  getCategoryById: (id: string) => Category | undefined
}

export default async function useCategories() {
  const { response: categories, request } = useApi<MaybeCategories>(
    'https://ecomm-categories.modus.workers.dev/'
  )
  const loaded = ref(false)

  const getCategoryById = (id: string) =>
    Array.isArray(categories.value)
      ? categories.value.find((category) => category.id == id)
      : undefined

  if (loaded.value === false) {
    await request()
    loaded.value = true
  }

  return {
    categories: readonly(categories),
    getCategoryById,
  } as CategoriesComposition
}
