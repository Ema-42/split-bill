<script setup>
import { defineProps, ref } from "vue";
import { store, pay } from "../store/store";

const props = defineProps(["id", "numberOfPerson", "totalPerPerson", "paid"]);

let paid = ref(false);

function handleChange(e) {
  paid = e.target.checked;
  pay(props.id, paid);
}
</script>
<template>
  <div :class="['person', props.paid ? 'person-paid' : 'person-no-paid']">
    <div>
      <div class="person-number">
        Person {{ props.numberOfPerson }}
        <span v-if="props.paid===false">Not Paid</span>
        <span v-else>Pay ✅ </span>
      </div>
      <div class="person-to-pay">
        {{
          new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(props.totalPerPerson)
        }}
      </div>
      <div class="paid flex justify-content-center">
        <InputSwitch v-model="paid" @change="handleChange" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.person {
  border-radius: 5px;
  font-size: 20px;
}

.person-paid {
  border: solid 4px yellowgreen;
}

.person-no-paid {
  border: solid 4px #ccc;
}
.person-to-pay {
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  color: greenyellow;
}
.person-number {
  background-color: rgb(0, 0, 0);
  padding: 10px;
  color: white;
  text-align: center;
}

.paid {
  background-color: rgb(52, 63, 104);
  padding: 10px;
}
</style>
