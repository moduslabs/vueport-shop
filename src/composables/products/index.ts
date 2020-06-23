import { ref, Ref } from 'vue'
import useApi from '../api'
import type { Category } from '../categories'

export interface Variant {
  id: string
  title: string
  sku: string
  quantity: number
}

export interface Product {
  id: string
  title: string
  description: string
  images: string[]
  category: Category['id']
  variants: Variant[]
  price: number
  tags: string[]
}

export type MaybeProducts = Product[] | undefined

export type ProductsComposition = {
  products: Ref<MaybeProducts>
}

export default async function useProductsInCategory(
  categoryId: Category['id']
) {
  const { response: products, request } = useApi<MaybeProducts>(
    `https://ecomm-products.modus.workers.dev/${categoryId}`
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

  return { products } as ProductsComposition
}

export type ProductComposition = {
  product: Ref<Product>
}
export async function useProduct(productId: Product['id']) {
  const { response: product, request } = useApi<Product>(
    `https://ecomm-products.modus.workers.dev/${productId}`
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

  return { product } as ProductComposition
}
