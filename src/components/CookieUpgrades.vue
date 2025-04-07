<script setup>
import { computed, toRefs } from "vue";

const props = defineProps({
  upgradeName: String,
  upgradeCost: Number,
  upgradeEffect: Number,
  upgradeStatus: Boolean,
  imageSrc: String,
  cookies: Number,
});

const emit = defineEmits(["buy"]);

const { cookies, upgradeCost } = toRefs(props);
const canAfford = computed(() => cookies.value >= upgradeCost.value);
</script>

<template>
  <div
    class="upgrade-item ml-1"
    :class="{ disabled: !canAfford }"
    @click="canAfford && emit('buy')"
  >
    <img :src="imageSrc" alt="Image" class="image" />
  </div>
</template>

<style scoped>
.upgrade-item {
  background-color: rgba(199, 0, 116, 0.2);
  border: 3px solid black;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image {
  width: auto;
  max-height: 40px;
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>
