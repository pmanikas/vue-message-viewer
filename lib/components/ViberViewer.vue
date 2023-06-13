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
        type: "Viber",
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
            <div class="viber-contact-name">Viber</div>
            <div class="viber-contact-status">Online</div>
        </div>
        <div class="message-container">
            <div class="message">
                <div class="message-date">
                    {{ simpleDate(props.message.date) }}
                </div>
                <div class="message-bubble received">
                    <div class="message-content">
                        {{ props.message.body }}
                        <span class="message-time">{{ simpleTime(props.message.date) }}</span>
                    </div>
                </div>
            </div>
            <div v-for="(message, i) of messages" :key="message.date + i" class="message">
                <div class="message-date">
                    {{ simpleDate(message.date) }}
                </div>
                <div class="message-bubble sent">
                    <div class="message-content">
                        {{ message.body }}
                        <span class="message-time">{{ simpleTime(message.date) }}</span>
                    </div>
                </div>
            </div>
        </div>
        <form class="message-footer" @submit.prevent="() => onSubmit(newMessage)">
            <input v-model="newMessage" placeholder="Type a message..." type="text" class="message-input" />
            <button class="send-button">
                <Icon class="send-icon" icon="send" />
            </button>
        </form>
    </div>
</template>

<style scoped lang="scss">
@use "../styles/abstracts" as *;

.message-window {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background-color: $white;
    border-radius: 8px;
    box-shadow: $base-shadow;
}

.message-header {
    padding: $sm;
    color: $white;
    text-align: center;
    background-color: $viber-purple;
}

.viber-contact-name {
    font-size: 18px;
    font-weight: bold;
}

.viber-contact-status {
    font-size: 12px;
    color: $mercury-gray;
}

.message-container {
    width: 100%;
    height: 100%;
    padding: $sm;
    overflow-y: auto;
}

.message {
    display: flex;
    flex-direction: column;
    font-size: 14px;
}

.message-date {
    align-self: center;
    font-size: 12px;
    color: $boulder-grey;
}

.message-bubble {
    min-width: 51%;
    max-width: 80%;
    padding: $sm;
    margin-bottom: $sm;
    line-height: 1.4;
    color: $mine-shaft-dark;
    border-radius: 12px;

    &.received {
        align-self: flex-start;
        background-color: $mercury-gray;
        border-top-left-radius: 0;
    }

    &.sent {
        align-self: flex-end;
        background-color: $viber-blue;
        border-top-right-radius: 0;
    }
}

.message-time {
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
    background-color: $white;

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
    background-color: $viber-purple;
    border-radius: 50%;
}

.send-icon {
    fill: $white;
}
</style>
