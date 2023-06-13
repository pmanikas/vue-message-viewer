export type MessageType = 'SMS' | 'Viber' | 'Email';

export interface Message {
    type: MessageType;
    sender: string;
    body: string;
    date: string;
    title: string;
    htmlUrl: string;
}
