import { reactive, computed } from 'vue'
const state = reactive({
  cartItems: 0,
})
const cartItems = computed(() => state.cartItems)
const isCartEmpty = computed(() => state.cartItems === 0)
const cartIncrement = () => {
  state.cartItems++
}

const cartState = {
  cartItems,
  isCartEmpty,
  cartIncrement,
}
export default cartState
