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
            <IonLabel>Shipping Address</IonLabel>
            <Input name="Address" inputType="text" />
            <Input name="City" inputType="text" />
            <Input name="Zip" inputType="number" />
            <Input name="State" inputType="text" />
            <Input name="Country" inputType="text" />
            <IonLabel>Billing Address</IonLabel>
            <IonItem>
              <IonLabel>Use different Billing Address</IonLabel>
              <IonCheckbox :checked="state.isChecked" @click="check" />
            </IonItem>
            <IonItem v-if="state.isChecked">
              <Input name="Address" inputType="text" />
              <Input name="City" inputType="text" />
              <Input name="Zip" inputType="number" />
              <Input name="State" inputType="text" />
              <Input name="Country" inputType="text" />
            </IonItem>
          </IonList>
        </IonCol>
        <IonCol>
          <IonLabel>Payment Information</IonLabel>
          <IonList>
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
            <IonItem>
              <IonLabel>Order Summary</IonLabel>
            </IonItem>
            <IonItem v-for="item in cart.items" :key="item.id">
              <IonList>
                <IonLabel>
                  {{ item['products'].title }} {{ item['products'].price }}
                </IonLabel>
              </IonList>
            </IonItem>
            <IonItem>
              <IonButton>Place Order</IonButton>
            </IonItem>
          </IonList>
        </IonCol>
      </IonRow>
    </IonGrid>
  </IonContent>
</template>

<script>
import { defineComponent, ref, reactive } from 'vue'
import range from 'lodash/range'
import Input from '../components/Input.vue'
import cart from '@/composables/cart/index'
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
    const state = reactive({
      isChecked: false,
    })
    function check() {
      state.isChecked = !state.isChecked
    }
    return {
      state,
      check,
      cart,
    }
  },
})
</script>
