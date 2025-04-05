<script setup>
import { defineProps, ref } from "vue";

const props = defineProps({
  clickValue: {
    type: Number,
    required: true,
  },
});

const message = ref("");
const messageStyle = ref({ left: "0px", top: "0px" });

function handleClick(event) {
  const cookieElement = event.currentTarget;
  const rect = cookieElement.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  message.value = `+${props.clickValue}`;
  messageStyle.value = { left: `${x}px`, top: `${y}px` };

  setTimeout(() => {
    message.value = "";
  }, 2000);
}
</script>

<template>
  <div
    class="cookie"
    :style="{
      width: '200px',
      height: '200px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    }"
    @click="handleClick"
  >
    <img
      src="https://pngimg.com/uploads/cookie/cookie_PNG13656.png"
      alt="Cookie"
    />

    <transition name="fadeMove">
      <div
        v-if="message"
        :style="{
          position: 'absolute',
          left: messageStyle.left,
          top: messageStyle.top,
          backgroundColor: 'rgba(0, 0, 0, 0)',
          color: 'white',
          fontSize: '16px',
          fontWeight: 'bold',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }"
      >
        {{ message }}
      </div>
    </transition>
  </div>
</template>

<style scoped>
.cookie {
  cursor: pointer;
}

.fadeMove-enter-active,
.fadeMove-leave-active {
  transition: opacity 2s;
}

.fadeMove-enter,
.fadeMove-leave-to {
  opacity: 0;
}

.fadeMove-enter-to {
  opacity: 1;
  animation: moveUp 2s ease-in-out forwards;
}
</style>
