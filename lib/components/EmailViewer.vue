<script setup lang="ts">
import { PropType } from "vue";
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
        default: "650px"
    },
    height: {
        type: String,
        default: "800px"
    }
});
</script>

<template>
    <div class="wrapper" :style="{ width:props.width, height:props.height }">
        <div class="header">
            <div class="sender-avatar">
                <Icon class="send-icon" icon="at" />
            </div>
            <div class="sender-info">
                <div class="sender-name">Email</div>
                <div class="sent-time">
                    {{
                        simpleDate(props.message.date) +
                        " - " +
                        simpleTime(props.message.date)
                    }}
                </div>
            </div>
        </div>
        <div class="subject">
            {{ props.message.title }}
        </div>
            <iframe v-if="props.message.htmlUrl" class="message-body" :src="props.message.htmlUrl" frameborder="0" />
            <div v-else class="message-body" v-html="props.message.body"></div>
    </div>
</template>

<style scoped lang="scss">
@use "../styles/abstracts" as *;

.wrapper {
    display: flex;
    flex-direction: column;
    gap: $md;
    max-width: 100%;
    max-height: 100vh;
    padding: $md;
    overflow: hidden;
    color: $mine-shaft;
    background-color: $white;
    border-radius: 6px;
    box-shadow: $base-shadow;
}

.header {
    display: flex;
    flex-direction: row;
    gap: $sm;
    align-items: center;
}

.sender-avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: $silver-chalice;
    border-radius: 50%;
}

.sender-info {
    display: flex;
    flex-direction: column;
}

.sender-name {
    font-weight: bold;
}

.sent-time {
    font-size: 12px;
    font-style: italic;
    color: $dove-grey;
}

.subject {
    font-size: 20px;
    font-weight: bold;
}

.message-body {
    width: 100%;
    height: 100%;
    overflow-y: auto;
}
</style>
