import { Item } from "./item"

export type OnDelete = (id: number) => void

export type OnNewItem = (newItem: Item) => void 

export type OnChecked = (id: number) => void

export type OnSortResults = (criteria: string) => void