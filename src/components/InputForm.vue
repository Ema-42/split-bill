<script setup>
import { ref } from "vue";
import { store, calcultate } from "../store/store";

const total = ref(0);
const tip = ref(0);
const people = ref(0);

function handleSubmit() {
  store.params.total = total;
  store.params.tip = tip;
  store.params.people = people;
  calcultate();
}
</script>
<template>
  <form @submit.prevent="handleSubmit">
    <div class="card form-container flex flex-wrap gap-3 p-fluid">
      <div class="flex-auto">
        <label for="stacked-buttons" class="font-bold block mb-2">
          Total
        </label>
        <InputNumber v-model="total" inputId="stacked-buttons" showButtons />
      </div>

      <div class="flex-auto">
        <label for="minmax-buttons" class="font-bold block mb-2">Tip</label>
        <InputNumber
          v-model="tip"
          inputId="minmax-buttons"
          mode="decimal"
          showButtons
          :min="0"
          :max="100"
        />
      </div>
      <div class="flex-auto">
        <label for="minmax-buttons" class="font-bold block mb-2">People</label>
        <InputNumber
          v-model="people"
          inputId="minmax-buttons"
          mode="decimal"
          showButtons
          :min="0"
          :max="100"
        />
      </div>
    </div>
    <div class="div-btn-calculate">
      <Button
        class="btn-submit"
        type="submit"
        icon="pi pi-dollar"
        label="CALCULATE"
      ></Button>
    </div>
  </form>
</template>
<style scoped>
.div-btn-calculate {
  display: flex;
  flex-direction: column;
  padding: 0rem 2rem 2rem 2rem;
}
.form-container{
  color: var(--surface-0);
  margin: 1rem;
  padding: 1rem;
  background-color: var(--surface-700);
}

</style>
