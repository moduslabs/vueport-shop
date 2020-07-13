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
function getCurrencyFormat() {
  const intl = new Intl.NumberFormat(navigator.language, {
    maximumFractionDigits: 2,
    style: 'currency',
    currency: 'USD',
  })
  return intl.format
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
function calcTotalCost() {
  let total = 0
  items.value.forEach((item) => {
    const index = items.value.indexOf(item)
    total += parseInt(item['products'].price) * cartCapacity.value[index].num
  })
  return total
}
export default {
  items,
  add,
  remove,
  cartCapacity,
  totalItems,
  getCurrencyFormat,
  calcTotalCost,
}
