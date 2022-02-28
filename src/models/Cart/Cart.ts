import { Instance, SnapshotOut, types } from "mobx-state-tree"

export const CartModel = types
  .model("Cart")
  .props({})
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

type CartType = Instance<typeof CartModel>
export interface Cart extends CartType {}

type CartSnapshotType = SnapshotOut<typeof CartModel>
export interface CartSnapshot extends CartSnapshotType {}
export const createCartDefaultModel = () => types.optional(CartModel, {})
