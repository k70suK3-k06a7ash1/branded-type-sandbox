const BrandTypeId: unique symbol = Symbol.for("effect/Brand")

type ProductId = number & {
  readonly [BrandTypeId]: {
    readonly ProductId: "ProductId"
  }
}

const getProductById = (id: ProductId) => {
  // Logic to retrieve product
  console.log({id})
}

type UserId = number

const id: UserId = 1

getProductById(id)
/*
Argument of type 'number' is not assignable to parameter of type 'ProductId'.
  Type 'number' is not assignable to type '{ readonly [BrandTypeId]: { readonly ProductId: "ProductId"; }; }'.ts(2345)
*/