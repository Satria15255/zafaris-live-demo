import type {
  CreateOrderPayload,
  CreateOrderResponse,
} from "../types/order.types";

export const orderPayload: CreateOrderPayload = {
  products: [
    {
      product: "product-test",
      size: 40,
    },
  ],

  name: "Test User",
  phoneNumber: "08123456789",

  shippingMethod: "Tiki",

  paymentMethod: "Transfer",

  shippingAddress: "Jawa Timur, SOno",
};

export const orderResponse: CreateOrderResponse = {
  message: "Transaction saved",

  transaction: {
    _id: "transaction-test",

    user: "user-test",

    products: [],

    name: "Test User",

    totalProducts: 1,

    totalPrice: 500000,
    finalPrice: 500000,

    phoneNumber: "08123456789",

    shippingMethod: "Tiki",

    shippingAddress: orderPayload.shippingAddress,

    discountAmount: 0,

    paymentMethod: "Transfer",

    paymentStatus: "Unpaid",

    paymentExpiredAt: "2026-09-17T09:00:00.000Z",

    status: "Pending",

    createdAt: "2026-09-17T08:00:00.000Z",

    updatedAt: "2026-09-17T08:00:00.000Z",
  },
};
