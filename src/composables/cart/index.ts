import { ref } from 'vue'
import { Category } from '@/composables/categories'
import { Variant } from '@/composables/products'
const items = ref<Array<Product>>([])
const cartCapacity = ref<Array<number>>([])
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
// function addCapacity(num: number) {
//   cartCapacity.value += num
// }
function add(product: Product, quantity: number) {
  items.value = [...items.value, product]
  cartCapacity.value = [...cartCapacity.value, quantity]
}
// function filter() {
//   items.value = items.value.filter((value, index, self) => {
//     return self.indexOf(value) === index
//   })
// }
function remove(product: Product) {
  const index = items.value.indexOf(product)
  if (index > -1) {
    items.value.splice(index, 1)
    cartCapacity.value.splice(index, 1)
  }
}
function totalItems() {
  return cartCapacity.value.reduce((a, b) => a + b, 0)
}
export default {
  items,
  add,
  remove,
  cartCapacity,
  totalItems,
}
