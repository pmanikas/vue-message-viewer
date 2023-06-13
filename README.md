# Vue Message Viewer

## Introduction

This is a simple and effective Vue 3 and TypeScript based library for displaying different types of messages. It currently supports the following types of messages:

- Email
- Viber
- SMS

## Installation

To install this library, you can use the following command:

```bash
npm i vue-message-viewer
```

## Usage

To use this library, you need to import the `MessageViewer` component and pass the message object to it.

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { MessageViewer } from 'vue-message-viewer';
import type { Message, MessageType } from 'vue-message-viewer';

const message = ref<Message>({
    type: 'SMS';
    sender: '';
    body: '';
    date: new Date();
    title: '';
    htmlUrl: '';
});
</script>

<template>
  <MessageViewer :message="message" />
</template>
```

## Props

| Name    | Type       | Required | Default | Description                                                                 |
| ------- | ---------- | -------- | ------- | --------------------------------------------------------------------------- |
| message | `Message`  | `true`   | -       | The message object that will be displayed.                                   |

## Message Object

The message object is a simple object that contains the following properties:

| Name    | Type             | Required | Default | Description                                                                 |
| ------- | ---------------- | -------- | ------- | --------------------------------------------------------------------------- |
| type    | `MessageType`    | `true`   | -       | The type of the message. Can be one of the following: `SMS`, `Email`, `Viber`|

