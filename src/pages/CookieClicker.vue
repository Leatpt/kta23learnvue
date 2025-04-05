<script setup>
import { computed, ref } from "vue";
import Cookie from "../components/Cookie.vue";
import CookieStore from "../components/CookieStore.vue";

let cookies = ref(0);
let clickValue = ref(1);
let buildings = ref([
  { name: "Cursor", price: 15, cps: 0.1, count: 0 },
  { name: "Grandma", price: 100, cps: 1, count: 0 },
  { name: "Farm", price: 1100, cps: 8, count: 0 },
]);
let upgrades = ref([
  { name: "Double Click Power", price: 100, effect: 2, bought: false },
  { name: "Triple Click Power", price: 500, effect: 3, bought: false },
]);

setInterval(() => {
  cookies.value += cps.value;
}, 1000);

function cookieClick() {
  cookies.value += clickValue.value;
}

function buyBuilding(building) {
  cookies.value -= building.price;
  building.count++;
  building.price += Math.ceil((building.price / 100) * 15);
}

function buyUpgrade(upgrade) {
  if (cookies.value >= upgrade.price && !upgrade.bought) {
    cookies.value -= upgrade.price;
    clickValue.value *= upgrade.effect;
    upgrade.bought = true;
  }
}

const cps = computed(() => {
  return buildings.value.reduce((total, building) => {
    return total + building.cps * building.count;
  }, 0);
});
</script>

<template>
  <div class="box">
    <div class="columns striped-background" :style="{ height: '70vh' }">
      <div class="column is-3">
        <div
          class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center"
          style="height: 100%"
        >
          <div
            class="has-text-centered is-fullwidth is-semi-transparent"
            :style="{
              color: '#ffffff',
              display: 'block',
              width: '100%',
            }"
          >
            <p class="is-size-2 has-text-weight-bold">
              Cookies: {{ +parseFloat(cookies).toFixed(1) }}
            </p>
            <p class="is-size-5">CPS: {{ +parseFloat(cps).toFixed(1) }}</p>
          </div>

          <div class="mb-4 mt-6">
            <figure @click="cookieClick" class="image is-1by1">
              <Cookie :clickValue="clickValue" />
            </figure>
          </div>

          <div class="mb-4"></div>
        </div>
      </div>
      <div class="column is-7 has-background-info"></div>
      <div class="column is-2">
        <CookieStore
          v-for="building in buildings"
          :disabled="cookies < building.price"
          @click="buyBuilding(building)"
          class="button is-large is-fullwidth custom-button"
        >
          {{ building.name }} {{ building.price }} {{ building.count }}
        </CookieStore>
      </div>
    </div>
  </div>
</template>

<style scoped>
.striped-background {
  background: repeating-linear-gradient(
    90deg,
    var(--stripe-1) 0%,
    var(--stripe-1) calc(100% / 59),
    var(--stripe-2) calc(100% / 59),
    var(--stripe-2) calc(2 * (100% / 59))
  );
  height: 100%;
}
.is-semi-transparent {
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
}
</style>
