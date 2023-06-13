<script setup lang="ts">
import { PropType } from "vue";
import ViberViewer from "./ViberViewer.vue";
import SmsViewer from "./SmsViewer.vue";
import EmailViewer from "./EmailViewer.vue";
import SvgSprite from "./SvgSprite.vue";

export type MessageType = 'SMS' | 'Viber' | 'Email';

export interface Message {
    type: MessageType;
    sender: string;
    body: string;
    date: string;
    title: string;
    htmlUrl: string;
}


const props = defineProps({
    message: {
        type: Object as PropType<Message>,
        required: true
    }
});
</script>

<template>
    <div v-if="props.message" class="library-message-wrapper">
        <EmailViewer v-if="props.message.type === 'Email'" :message="message" />
        <ViberViewer v-else-if="props.message.type ==='Viber'" :message="message" />
        <SmsViewer v-else-if="props.message.type === 'SMS'" :message="message" />
    </div>
    <SvgSprite></SvgSprite>
</template>

<style scoped lang="scss"></style>
