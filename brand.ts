import type { Brand } from "npm:effect"

// Define a ProductId type branded with a unique identifier
type ProductId = number & Brand.Brand<"ProductId">

// Define a UserId type branded similarly
type UserId = number & Brand.Brand<"UserId">