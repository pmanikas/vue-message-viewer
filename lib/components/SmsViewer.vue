<script setup lang="ts">
import { PropType, ref } from "vue";
import { Message } from "./../interfaces/Message";
import { simpleDate, simpleTime } from "./../utilities/date-time";
import Icon from "./Icon.vue";

const props = defineProps({
    message: {
        type: Object as PropType<Message>,
        required: true
    },
    width: {
        type: String,
        default: "330px"
    },
    height: {
        type: String,
        default: "500px"
    }
});

const newMessage = ref<string>("");
const messages = ref<Message[]>([]);

function buildMessage(text: string): Message {
    return {
        body: text,
        type: "SMS",
        date: new Date().toString(),
        title: "",
        sender: "",
        htmlUrl: ""
    };
}

function addMessage(newMesage: string): void {
    messages.value.push(buildMessage(newMesage));
}

function clearMessage(): void {
    newMessage.value = "";
}

function onSubmit(newMessage: string): void {
    if (!newMessage) return;
    addMessage(newMessage);
    clearMessage();
}
</script>

<template>
    <div class="message-window" :style="{ width:props.width, height:props.height }">
        <div class="message-header">
            <div class="back-button">
                <Icon class="back-icon" icon="back-ios" />
            </div>
            <div class="contact-name">SMS</div>
            <div class="menu-button" />
        </div>
        <div class="message-container">
            <div class="message">
                <div class="message-time">
                    {{
                        simpleDate(props.message.date) +
                        " " +
                        simpleTime(props.message.date)
                    }}
                </div>
                <div class="message-bubble received">
                    {{ props.message.body }}
                </div>
            </div>
            <div v-for="(message, i) of messages" :key="message.date + i" class="message">
                <div class="message-time">
                    {{ simpleDate(message.date) + " " + simpleTime(message.date) }}
                </div>
                <div class="message-bubble sent">
                    <div class="message-text">
                        {{ message.body }}
                    </div>
                </div>
            </div>
        </div>
        <form class="message-footer" @submit.prevent="() => onSubmit(newMessage)">
            <input v-model="newMessage" placeholder="Text Message" type="text" class="message-input" />
            <button class="send-button">
                <Icon class="send-icon" icon="arrow-up" />
            </button>
        </form>
    </div>
</template>

<style scoped lang="scss">
@use "./../styles/abstracts" as *;

.message-window {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    color: $mine-shaft;
    background-color: $white;
    border-radius: 6px;
    box-shadow: $base-shadow;
}

.message-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: $sm;
    border-bottom: 1px solid $alto-grey;
}

.contact-name {
    flex: 1;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
}

.menu-button {
    width: $lg;
    height: $lg;
}

.message-container {
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: $sm;
    overflow-y: auto;
}

.message {
    display: flex;
    flex-direction: column;
}

.message-bubble {
    min-width: 51%;
    max-width: 80%;
    padding: $sm;
    margin-bottom: $sm;
    font-size: 16px;
    line-height: 1.4;
    border-radius: 12px;
}

.message-bubble.received {
    background-color: $athens-gray;
}

.message-bubble.sent {
    align-self: flex-end;
    color: $white;
    background-color: $ios-blue;
}

.message-text {
    margin-bottom: $xs;
}

.message-time {
    align-self: center;
    font-size: 12px;
    color: $boulder-grey;
}

.message-footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: $sm;
    border-top: 1px solid $alto-grey;
}

.message-input {
    flex: 1;
    padding: $xs $sm;
    margin-right: $sm;
    font-size: 16px;
    color: $mine-shaft;
    border: 1px solid $alto-grey;
    border-radius: 24px;
    background: $white;

    &:focus {
        border: 1px solid $boulder-grey;
        outline: none;
    }
}

.send-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    padding: $xs;
    color: $white;
    cursor: pointer;
    background-color: $ios-green;
    border-radius: 50%;
}

.send-icon {
    fill: $white;
    font-size: 2.5rem;
}
</style>
