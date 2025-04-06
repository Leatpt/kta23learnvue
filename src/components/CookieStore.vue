<script setup></script>
<template>
  <div class="columns is-flex-direction-column is-fullheight has-text-centered">
    <div class="column">
      <div class="upgrade-store"><p class="is-bold is-size-5">Upgrades</p></div>
      <div class=""><p class="is-bold is-size-5">Upgrade Items</p></div>
    </div>

    <div class="column">
      <div class="upgrade-store"><p class="is-bold is-size-5">Store</p></div>
      <slot></slot>
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
}
</style>
