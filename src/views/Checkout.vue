<template>
  <IonContent>
    <IonGrid>
      <IonRow>
        <IonCol>
          <IonList>
            <IonLabel>Contact Information</IonLabel>
            <Input name="First Name" inputType="text" />
            <Input name="Last Name" inputType="text" />
            <Input name="Phone Number" inputType="tel" />
            <Input name="Email" inputType="email" />
          </IonList>
        </IonCol>
        <IonCol>
          <div />
        </IonCol>
        <IonCol>
          <IonList>
            <IonLabel>Payment Information</IonLabel>
            <Input name="Cardholder Name" inputType="text" />
            <Input name="Card Number" inputType="text" />
            <IonItem>
              <IonLabel position="stacked">
                Month
                <IonText color="danger">*</IonText>
              </IonLabel>
              <IonSelect placeholder="Month" role="menu">
                <IonSelectOption v-for="month in months" :key="month">
                  {{ month }}
                </IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">
                Year
                <IonText color="danger">*</IonText>
              </IonLabel>
              <IonSelect placeholder="Year" role="menu">
                <IonSelectOption v-for="year in years" :key="year">
                  {{ year }}
                </IonSelectOption>
              </IonSelect>
            </IonItem>
            <Input name="CVV" inputType="number" />
          </IonList>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonList>
            <IonLabel>Shipping Address</IonLabel>
            <Input name="Address" inputType="text" />
            <Input name="City" inputType="text" />
            <Input name="Zip" inputType="number" />
            <Input name="State" inputType="text" />
            <Input name="Country" inputType="text" />
          </IonList>
        </IonCol>
        <IonCol>
          <div />
        </IonCol>
        <IonCol>
          <IonItem>
            <IonButton>Place Order</IonButton>
          </IonItem>
          <IonItem>
            {{ 'Total: ' + currency(calcTotal()) }}
          </IonItem>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonLabel>Billing Address</IonLabel>
          <IonItem>
            <IonLabel>Use different Billing Address</IonLabel>
            <IonCheckbox :checked="state.isChecked" @click="check" />
          </IonItem>
          <IonList v-if="state.isChecked">
            <Input name="Address" inputType="text" />
            <Input name="City" inputType="text" />
            <Input name="Zip" inputType="number" />
            <Input name="State" inputType="text" />
            <Input name="Country" inputType="text" />
          </IonList>
        </IonCol>
        <IonCol>
          <div />
        </IonCol>
        <IonCol>
          <IonCol>
            <IonLabel>Order Summary</IonLabel>
            <IonItem v-for="item in cart.items" :key="item.id">
              <IonList>
                <IonLabel> {{ item['products'].title }} </IonLabel>
                <IonLabel>
                  {{ 'Price: ' + currency(item['products'].price) }}
                </IonLabel>
              </IonList>
            </IonItem>
          </IonCol>
        </IonCol>
      </IonRow>
    </IonGrid>
  </IonContent>
</template>

<script>
import { defineComponent, ref, reactive } from 'vue'
import range from 'lodash/range'
import Input from '@/components/Input.vue'
import cart from '../composables/cart'
import {
  IonCheckbox,
  IonList,
  IonItem,
  IonLabel,
  IonContent,
  IonText,
  IonGrid,
  IonCol,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonButton,
} from '@modus/ionic-vue'

function getCurrencyFormat() {
  const intl = new Intl.NumberFormat(navigator.language, {
    maximumFractionDigits: 2,
    style: 'currency',
    currency: 'USD',
  })

  return intl.format
}

export default defineComponent({
  name: 'Checkout',
  components: {
    IonCheckbox,
    IonList,
    IonItem,
    IonLabel,
    IonContent,
    IonText,
    IonGrid,
    IonCol,
    IonRow,
    IonSelect,
    IonSelectOption,
    IonButton,
    Input,
  },
  data() {
    return {
      months: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      years: ref(range(2020, 2031, 1)),
    }
  },
  setup() {
    const currency = getCurrencyFormat()
    const state = reactive({
      isChecked: false,
    })
    function check() {
      state.isChecked = !state.isChecked
    }
    function calcTotal() {
      let total = 0

      cart.items.value.forEach((item) => {
        total = total + parseInt(item['products'].price)
      })

      return total
    }
    return {
      state,
      check,
      cart,
      calcTotal,
      currency,
    }
  },
})
</script>
