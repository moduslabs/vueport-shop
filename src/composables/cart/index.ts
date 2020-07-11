import { ref } from 'vue'
import { Category } from '@/composables/categories'
import { Variant } from '@/composables/products'
const items = ref<Array<Product>>([])

interface Product {
  id: string
  title: string
  description: string
  images: string[]
  category: Category['id']
  variants: Variant[]
  price: number
  tags: string[]
}

function add(product: Product) {
  items.value = [...items.value, product]
}
function remove(product: Product) {
  const index = items.value.indexOf(product)
  if (index > -1) {
    items.value.splice(index, 1)
  }
}
export default {
  items,
  add,
  remove,
}
