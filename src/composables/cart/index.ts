import { ref } from 'vue'
import { Category } from '@/composables/categories'
import { Variant } from '@/composables/products'
const items = ref<Array<Product>>([])
const uniqueItems = ref<Array<Product>>([])
const cartCapacity = ref(0)
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
function add(product: Product) {
  items.value = [...items.value, product]
}
function filter() {
  uniqueItems.value = items.value.filter((value, index, self) => {
    return self.indexOf(value) === index
  })
}
function remove(product: Product) {
  const index = uniqueItems.value.indexOf(product)
  if (index > 0) {
    uniqueItems.value.splice(index, 1)
  } else {
    uniqueItems.value.pop() // not sure why but last element always has trouble being removed
  }
}
export default {
  items,
  add,
  remove,
  cartCapacity,
  uniqueItems,
  filter,
}
