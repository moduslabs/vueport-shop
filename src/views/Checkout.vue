<template>
  <IonContent>
    <IonGrid>
      <IonRow>
        <IonCol>
          <IonList>
            <IonLabel>Shipping Address</IonLabel>
            <IonItem>
              <IonLabel position="stacked">
                First Name
                <IonText color="danger">*</IonText>
              </IonLabel>
              <IonInput required type="text" placeholder="First Name" />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">
                Last Name
                <IonText color="danger">*</IonText>
              </IonLabel>
              <IonInput required="true" placeholder="Last Name" />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">
                Phone Number
                <IonText color="danger">*</IonText>
              </IonLabel>
              <IonInput required="true" placeholder="Phone Number" type="tel" />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">
                Email
                <IonText color="danger">*</IonText>
              </IonLabel>
              <IonInput required="true" placeholder="Email" type="email" />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">
                Address
                <IonText color="danger">*</IonText>
              </IonLabel>
              <IonInput
                placeholder="Address Line 1"
                required="true"
                type="text"
              />
              <IonInput
                placeholder="Address Line 2"
                required="true"
                type="text"
              />
              <IonInput placeholder="City" required="true" type="text" />
              <IonInput placeholder="Zip" required="true" type="number" />
              <IonInput placeholder="State" required="true" type="text" />
              <IonInput placeholder="Country" required="true" type="text" />
            </IonItem>
          </IonList>
        </IonCol>
        <IonCol>
          <IonLabel>Payment Information</IonLabel>
          <IonList>
            <IonItem>
              <IonLabel position="stacked">
                Cardholder Name
                <IonText color="danger">*</IonText>
              </IonLabel>
              <IonInput required type="text" placeholder="Cardholder Name" />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">
                Card Number
                <IonText color="danger">*</IonText>
              </IonLabel>
              <IonInput required type="number" placeholder="Card Number" />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">
                Month
                <IonText color="danger">*</IonText>
              </IonLabel>
              <IonSelect placeholder="Month">
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
              <IonSelect placeholder="Year">
                <IonSelectOption v-for="year in years" :key="year">
                  {{ year }}
                </IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">
                CVV
                <IonText color="danger">*</IonText>
              </IonLabel>
              <IonInput required type="number" placeholder="CVV" />
            </IonItem>
            <IonItem>
              <IonLabel>Order Summary (Soon to come)</IonLabel>
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
import { defineComponent } from 'vue'
import { range } from 'lodash'
import {
  IonInput,
  // IonCheckbox,
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
    IonInput,
    // IonCheckbox,
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
      years: range(2020, 2031, 1),
    }
  },
})
</script>
