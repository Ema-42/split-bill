<template>
  <div class="card flex flex-wrap gap-3 p-fluid">
      <div class="flex-auto">
          <label for="stacked-buttons" class="font-bold block mb-2"> Stacked </label>
          <InputNumber v-model="value1" inputId="stacked-buttons" showButtons mode="currency" currency="USD" />
      </div>

      <div class="flex-auto">
          <label for="minmax-buttons" class="font-bold block mb-2"> Min-Max Boundaries </label>
          <InputNumber v-model="value2" inputId="minmax-buttons" mode="decimal" showButtons :min="0" :max="100" />
      </div>
      <div class="flex-auto">
          <label for="horizontal-buttons" class="font-bold block mb-2"> Horizontal with Step </label>
          <InputNumber v-model="value3" inputId="horizontal-buttons" showButtons buttonLayout="horizontal" :step="0.25" mode="currency" currency="EUR">
              <template #incrementbuttonicon>
                  <span class="pi pi-plus" />
              </template>
              <template #decrementbuttonicon>
                  <span class="pi pi-minus" />
              </template>
          </InputNumber>
      </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const value1 = ref(20);
const value2 = ref(25);
const value3 = ref(10.5);
</script>