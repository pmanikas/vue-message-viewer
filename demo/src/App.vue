<script setup lang="ts">
import { ref } from "vue";
import { MessageViewer, Message, MessageType } from "./../../lib/main";

const message = ref<Message>({
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  type: "Viber",
  date: new Date().toString(),
  title: "This is a big title",
  sender: "John Wick",
  htmlUrl: "https://pinia.vuejs.org/introduction.html"
});

function setMessageType(type: MessageType): void {
  message.value.type = type;
}
</script>

<template>
  <div class="demo-container">
    <h1>Vue message previewer Demo</h1>
    <br>
    <h3>Select viewer type</h3>
    <div class="buttons-container">
      <button @click="() => setMessageType('Email')" class="button email">Email</button>
      <button @click="() => setMessageType('SMS')" class="button sms">SMS</button>
      <button @click="() => setMessageType('Viber')" class="button viber">Viber</button>
    </div>
    <br>
    <main>
      <MessageViewer :message="message"></MessageViewer>
    </main>
    <footer class="footer">
      <p>Created by <a href="https://pantelismanikas.com" target="_blank">Pantelis Manikas</a></p>
    </footer>
  </div>
</template>

<style scoped lang="scss">
.demo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
}

.buttons-container {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.button {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;

  &.email {
    background-color: #007bff;
  }

  &.sms {
    background-color: #4cd964;
  }

  &.viber {
    background-color: #8a2be2;
  }

  &:hover {
    opacity: 0.8;
  }
}

.footer {
  margin-top: 2rem;
  font-size: 0.8rem;
}
</style>
 