import { ref } from 'vue'
import { Category } from '@/composables/categories'
import { Variant } from '@/composables/products'
const items = ref<Array<Products>>([])
const cartCapacity = ref<Array<Quantity>>([])
interface Products {
  products: Product
}
interface Product {
  price: number
  id: string
  title: string
  description: string
  images: string[]
  category: Category['id']
  variants: Variant[]
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
function add(product: Products, num: number) {
  const quantity = {} as Quantity
  quantity.id = product.products.id
  quantity.num = num
  items.value = [...items.value, product]
  cartCapacity.value = [...cartCapacity.value, quantity]
}

function remove(product: Products) {
  items.value.splice(
    items.value.findIndex((item) => item.products.id === product.products.id),
    1
  )
  cartCapacity.value.splice(
    cartCapacity.value.findIndex(
      (quantity) => quantity.id === product.products.id
    ),
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
    total += item.products.price * cartCapacity.value[index].num
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
