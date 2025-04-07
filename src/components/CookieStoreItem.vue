<script setup>
import { computed, toRefs } from "vue";

const props = defineProps({
  buildingName: String,
  buildingCost: Number,
  buildingCount: Number,
  imageSrc: String,
  cookies: Number,
});

const emit = defineEmits(["buy"]);

const { cookies, buildingCost } = toRefs(props);
const canAfford = computed(() => cookies.value >= buildingCost.value);
</script>

<template>
  <div
    class="store-item"
    :class="{ disabled: !canAfford }"
    @click="canAfford && emit('buy')"
  >
    <div class="columns is-vcentered">
      <div class="column auto-image-column">
        <img :src="imageSrc" alt="Image" class="image" />
      </div>
      <div class="column">
        <div class="text-container">
          <p class="top-text">{{ buildingName }}</p>
          <p class="bottom-text">
            <span class="icon-text">
              <img src="/cookies.png" alt="Cookies" class="inline-icon" />
              <span>{{ buildingCost }}</span>
            </span>
          </p>
        </div>
      </div>
      <div class="column is-4">
        <p class="number">{{ buildingCount }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.store-item {
  background-color: #f0f0f0;
  border: 3px solid black;
  border-top: none;
  padding: 2px;
  color: var(--stripe-3);
  text-transform: uppercase;
}

.columns {
  display: flex;
  justify-content: space-between;
}

.column {
  padding: 10px;
}

.auto-image-column {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image {
  height: auto;
  width: auto;
  max-width: 50px;
  max-height: 50px;
}

.text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  text-align: left;
}

.top-text {
  text-align: center;
  font-weight: bold;
}

.bottom-text {
  text-align: center;
  font-weight: slim;
}

.number {
  text-align: right;
  font-size: 32px;
  font-weight: bold;
  color: #333;
  padding-right: 20px;
}

.icon-text {
  display: flex;
  align-items: center;
  gap: 4px;
}

.inline-icon {
  height: 1em;
  width: auto;
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>
