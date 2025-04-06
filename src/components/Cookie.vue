<script setup>
import { ref } from "vue";

const props = defineProps({
  clickValue: {
    type: Number,
    required: true,
  },
});

const messages = ref([]);
let id = 0;

function handleClick(event) {
  const cookieElement = event.currentTarget;
  const rect = cookieElement.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  const newMessage = {
    id: id++,
    value: `+${props.clickValue}`,
    left: `${x}px`,
    top: `${y}px`,
  };

  messages.value.push(newMessage);

  setTimeout(() => {
    messages.value = messages.value.filter((msg) => msg.id !== newMessage.id);
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

    <transition-group name="fadeMove" tag="div">
      <div
        v-for="msg in messages"
        :key="msg.id"
        class="float-msg"
        :style="{
          position: 'absolute',
          left: msg.left,
          top: msg.top,
          backgroundColor: 'rgba(0, 0, 0, 0)',
          color: 'white',
          fontSize: '16px',
          fontWeight: 'bold',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }"
      >
        {{ msg.value }}
      </div>
    </transition-group>
  </div>
</template>

<style scoped>
.cookie {
  cursor: pointer;
}

.float-msg {
  position: absolute;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0);
  color: white;
  font-size: 16px;
  font-weight: bold;
  pointer-events: none;
  animation: floatUp 2s ease-in forwards;
}

.fadeMove-enter-active,
.fadeMove-leave-active {
  transition: opacity 2s;
}

.fadeMove-enter,
.fadeMove-leave-to {
  opacity: 0;
  transform: translate(-50%, -50%) translateY(0);
}

@keyframes floatUp {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) translateY(0);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) translateY(-100px);
  }
}
</style>
