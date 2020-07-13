import { ref } from 'vue'
import { Category } from '@/composables/categories'
import { Variant } from '@/composables/products'
const items = ref<Array<Product>>([])
const cartCapacity = ref<Array<Quantity>>([])
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

interface Quantity {
  id: string
  num: number
}

function add(product: Product, num: number) {
  const quantity = {} as Quantity
  quantity.id = product.id
  quantity.num = num
  items.value = [...items.value, product]
  cartCapacity.value = [...cartCapacity.value, quantity]
}

function remove(product: Product) {
  items.value.splice(
    items.value.findIndex((item) => item.id === product.id),
    1
  )
  cartCapacity.value.splice(
    cartCapacity.value.findIndex((quantity) => quantity.id === product.id),
    1
  )
}
function totalItems() {
  let total = 0

  cartCapacity.value.forEach((quantity) => {
    total = total + quantity.num
  })

  return total
}
export default {
  items,
  add,
  remove,
  cartCapacity,
  totalItems,
}
