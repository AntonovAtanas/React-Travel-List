import { Item } from "./item"

export type OnDelete = (id: number) => void

export type OnNewItem = (newItem: Item) => void 