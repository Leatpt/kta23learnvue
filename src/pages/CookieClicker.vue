<script setup>
import { computed, ref } from "vue";
import Cookie from "../components/Cookie.vue";
import CookieStore from "../components/CookieStore.vue";
import CookieStoreItem from "../components/CookieStoreItem.vue";
import CookieUpgrades from "../components/CookieUpgrades.vue";

let cookies = ref(0);
let clickValue = ref(1);
let buildings = ref([
  { name: "Cursor", price: 15, cps: 0.1, count: 0, image: "/hand.png" },
  { name: "Helper", price: 100, cps: 1, count: 0, image: "/farmer.png" },
  { name: "Farm", price: 1100, cps: 8, count: 0, image: "/barn.png" },
]);
let upgrades = ref([
  {
    name: "Double Click Power",
    price: 100,
    effect: 2,
    bought: false,
    image: "/double.svg",
  },
  {
    name: "Triple Click Power",
    price: 500,
    effect: 3,
    bought: false,
    image: "/triple.svg",
  },
  {
    name: "Stronger Helpers",
    price: 5000,
    effect: 2,
    bought: false,
    image: "/farmerupgrade.svg",
  },
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
    <div
      class="columns striped-background is-gapless"
      :style="{ height: '70vh' }"
    >
      <div class="column is-3 custom-border">
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
            <p class="is-size-3 has-text-weight-bold">
              Cookies: {{ +parseFloat(cookies).toFixed(1) }}
            </p>
            <p class="is-size-6">CPS: {{ +parseFloat(cps).toFixed(1) }}</p>
          </div>

          <div>
            <figure
              @click="cookieClick"
              class="image is-1by1"
              style="margin: 0"
            >
              <Cookie :clickValue="clickValue" />
            </figure>
          </div>

          <div class="mb-4"></div>
        </div>
      </div>
      <div class="column is-7 has-background-info custom-border"></div>
      <div class="column is-2 custom-background custom-border">
        <CookieStore>
          <template #upgrades>
            <div v-for="(upgrade, index) in upgrades" :key="index">
              <CookieUpgrades
                :upgradeName="upgrade.name"
                :upgradeCost="upgrade.price"
                :upgradeEffect="upgrade.effect"
                :upgradeStatus="upgrade.bought"
                :imageSrc="upgrade.image"
                :cookies="cookies"
                @buy="buyUpgrade(upgrade)"
              />
            </div>
          </template>
          <template #store>
            <div v-for="(building, index) in buildings" :key="index">
              <CookieStoreItem
                :buildingName="building.name"
                :buildingCost="building.price"
                :buildingCount="building.count"
                :imageSrc="building.image"
                :cookies="cookies"
                @buy="buyBuilding(building)"
              />
            </div>
          </template>
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
.custom-border {
  border: 10px solid;
  border-image: repeating-linear-gradient(
      180deg,
      var(--stripe-3) 0%,
      var(--stripe-3) calc(100% / 101),
      var(--stripe-4) calc(100% / 101),
      var(--stripe-4) calc(2 * (100% / 101))
    )
    1;
  z-index: 5;
}
.custom-background {
  background-color: rgba(92, 92, 92, 0.5);
  height: 100%;
  z-index: 1;
}
</style>
