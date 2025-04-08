<script setup>
import { computed, toRefs, ref } from "vue";

const props = defineProps({
  upgradeName: String,
  upgradeCost: Number,
  upgradeEffect: Number,
  upgradeStatus: Boolean,
  imageSrc: String,
  boughtBuildingCount: Number,
  connectedBuilding: String,
  requiredBuildingCount: Number,
  cookies: Number,
});

const emit = defineEmits(["buy"]);
const isHovered = ref(false);

const { cookies, upgradeCost } = toRefs(props);
const canAfford = computed(() => cookies.value >= upgradeCost.value);

const canUpgrade = computed(() => {
  return props.boughtBuildingCount >= props.requiredBuildingCount;
});

const upgradeVisible = computed(() => !props.upgradeStatus && canUpgrade.value);
</script>

<template>
  <div
    v-if="upgradeVisible"
    class="upgrade-item ml-1"
    @click="canAfford && emit('buy')"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <img
      :src="imageSrc"
      alt="Image"
      class="image"
      :class="{ disabled: !canAfford }"
    />
    <div v-if="isHovered" class="upgrade-tooltip">
      <p class="tooltip-title">{{ upgradeName }}</p>
      <p>Cost: {{ upgradeCost }} cookies</p>
      <p>Effect: +{{ upgradeEffect }}x click power</p>
    </div>
  </div>
</template>

<style scoped>
.upgrade-item {
  position: relative;
  background-color: rgba(199, 0, 116, 0.2);
  border: 3px solid black;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
}

.image {
  width: auto;
  max-height: 40px;
}

.image.disabled {
  opacity: 0.5;
  cursor: default;
  filter: grayscale(100%);
}

.upgrade-tooltip {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.95);
  color: #000;
  border: 2px solid #000;
  border-radius: 6px;
  padding: 8px;
  z-index: 10;
  width: 200px;
  font-size: 0.85rem;
  top: 60px;
  left: 0;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
}

.tooltip-title {
  font-weight: bold;
  margin-bottom: 4px;
}
</style>
