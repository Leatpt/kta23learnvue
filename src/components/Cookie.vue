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
    :style="{
      width: '300px',
      height: '300px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    }"
  >
    <img
      src="/Glow.svg"
      class="glow-circle"
      alt="Glow Circle"
      draggable="false"
    />

    <div class="cookie-shadow"></div>

    <img
      src="https://pngimg.com/uploads/cookie/cookie_PNG13656.png"
      class="cookie"
      alt="Cookie"
      draggable="false"
      @click="handleClick"
      :style="{
        width: '200px',
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }"
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
          fontSize: '18px',
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
  z-index: 2;
  transition: transform 0.3s ease;
  margin: 0;
  padding: 0;
  border-radius: 50%;
}

.glow-circle {
  animation: rotate 10s linear infinite;
  z-index: 0;
  pointer-events: none;
}

.cookie:hover {
  transform: scale(1.05);
}

.cookie-shadow {
  position: absolute;
  width: 200px;
  height: 200px;
  top: 19%;
  left: 17%;
  background-color: #340714;
  border-radius: 50%;
  filter: blur(5px);
  z-index: 1;
}

.float-msg {
  position: absolute;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0);
  color: white;
  font-size: 18px;
  font-weight: bold;
  pointer-events: none;
  animation: floatUp 2s ease-in forwards;
  z-index: 3;
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
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
