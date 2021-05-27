export interface MessageModel {
  sender: string,
  room: string,
  data: {
    content?: string,
    url?: string,
    fileName?: string
  },
  created_at: Date,
  imageUrl?: string
}
