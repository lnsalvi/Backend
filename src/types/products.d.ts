export interface TProduct {
  id: Number,
  description: String,
  brand: String,
  amount: Number,
  priceWNIva: Number,
  stockNotice: Number,
  stockAlarm: Number
}

export type TProductNId = Omit<DiaryEntry, 'id'>