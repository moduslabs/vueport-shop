import { ref, computed } from 'vue'
import type { Product, Variant } from '@/composables/products'

export interface CartItem {
  product: Product
  variant: Variant
  quantity: number
  price: number
}

export type Cart = Map<Variant['sku'], CartItem>

const items = ref<Cart>(new Map())

const totalItems = computed(() => {
  let total = 0

  items.value.forEach((item) => {
    total += item.quantity
  })

  return total
})

const totalCost = computed(() => {
  let total = 0
  items.value.forEach((item) => {
    total += item.price
  })
  return total
})

function getCurrencyFormat() {
  const intl = new Intl.NumberFormat(navigator.language, {
    maximumFractionDigits: 2,
    style: 'currency',
    currency: 'USD',
  })
  return intl.format
}

function add(product: Product, variant: Variant, quantity: number) {
  let oldQuantity = 0

  if (items.value.has(variant.id)) {
    // if we already have this SKU in cart then add quantity
    const existing = items.value.get(variant.id)
    oldQuantity = existing?.quantity || 0
  }

  const totalQuantity = quantity + oldQuantity

  items.value.set(variant.id, {
    product,
    variant,
    quantity: totalQuantity,
    price: product.price * ~~totalQuantity,
  })
}

function remove(skuId: Variant['sku']) {
  items.value.delete(skuId)
}

export default {
  items,
  add,
  remove,
  getCurrencyFormat,
  totalCost,
  totalItems,
}
