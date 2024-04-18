<script setup>
import { getGrandTotal, store } from "../store/store";
import Label from "./Label.vue";
import Person from "./Person.vue";
</script>
<template>
  <div >
    <div class="no-items" v-if="store.people.length === 0">No items</div>
    <div class="people-view" v-if="store.people.length > 0">
      <div class="header">
        <div>
          <Label title="Total + Tip : " :value="getGrandTotal()"></Label>
        </div>
        <div>
          <Label title="Ramining : " :value="store.params.remaining"></Label>
        </div>
      </div>
      <div class="people-container">
        <Person
          v-for="person in store.people"
          :key="person.id"
          :id="person.id"
          :number-of-person="person.numberOfPerson"
          :total-Per-Person="person.totalPerPerson"
          :paid="person.paid"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
.no-items {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
}
.people-view {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.header {
  color: var(--surface-0);
  font-weight: bolder;
  font-size: 25px;
  display: flex;
  gap: 15px;
  flex-direction: column;
  margin-bottom: 2rem;
}
.people-container {
  margin: 0rem 1rem 0rem 1rem;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 1rem;
}

</style>
