import { ref, computed } from 'vue'
const items = ref([])
const size = computed(() => items.value.length)
const isEmpty = computed(() => size.value === 0)
function add(product: never) {
  items.value = [...items.value, product]
}
export default {
  items,
  size,
  isEmpty,
  add,
}
