import { Brand } from "npm:effect"

// Define UserId as a branded number
type UserId = number & Brand.Brand<"UserId">

// Constructor for UserId
const UserId = Brand.nominal<UserId>()

const getUserById = (id: UserId) => {
  // Logic to retrieve user
}

// Define ProductId as a branded number
type ProductId = number & Brand.Brand<"ProductId">

// Constructor for ProductId
const ProductId = Brand.nominal<ProductId>()

const getProductById = (id: ProductId) => {
  // Logic to retrieve product
}