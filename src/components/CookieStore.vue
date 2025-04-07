<script setup></script>
<template>
  <div
    class="columns is-flex-direction-column is-fullheight has-text-centered is-gapless"
  >
    <div class="column">
      <div class="upgrade-store"><p class="is-bold is-size-5">Upgrades</p></div>
      <div class="upgrade-item is-flex is-flex-wrap-wrap">
        <slot name="upgrades"></slot>
      </div>
    </div>

    <div class="column">
      <div class="upgrade-store"><p class="is-bold is-size-5">Store</p></div>
      <slot name="store"></slot>
    </div>
  </div>
</template>
<style scoped>
.upgrade-store {
  background-color: var(--stripe-1);
  border: 3px solid black;
  padding: 2px;
  color: var(--stripe-3);
  font-weight: bold;
  text-transform: uppercase;
  margin: 0;
}
.upgrade-item {
  background-color: #f0f0f0;
  border: 3px solid black;
  border-bottom: none;
  border-top: none;
  min-height: 50px;
  padding: 2px;
  color: var(--stripe-3);
  margin: 0;
}
</style>
