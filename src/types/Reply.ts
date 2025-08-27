import type { Sender } from './Sender';

export type ReplyBase = {
  sender: Sender;
  onClick?: () => void;
  type: 'text' | 'image' | 'video' | 'audio' | 'document' | 'contact' | 'location';
};

export type ReplyText = ReplyBase & {
  type: 'text';
  text: string;
};

export type ReplyImage = ReplyBase & {
  type: 'image';
  fileUrl: string;
  width?: number;
  height?: number;
  caption?: string;
};

export type ReplyMedia = ReplyBase & {
  type: 'image' | 'video' | 'audio' | 'document';
  fileUrl: string;
  seconds?: number;
  width?: number;
  height?: number;
  caption?: string;
};

export type ReplyContact = ReplyBase & {
  type: 'contact';
  name: string;
  phone?: string | string[];
};

export type ReplyLocation = ReplyBase & {
  type: 'location';
  lat: number;
  lng: number;
  name?: string;
};

export type Reply = ReplyText | ReplyMedia | ReplyImage | ReplyContact | ReplyLocation;
