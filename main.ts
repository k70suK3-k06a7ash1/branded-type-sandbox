// 必要なインポート
import * as E from "npm:effect/data/Either";
import type * as B from "npm:effect/data/Branded";

// Branded Typeの定義
type Positive = B.Branded<number, "Positive">;

type NonEmptyString = B.Branded<string, "NonEmptyString">;

// 型を安全に作成するための関数
const Positive = {
  make: (n: number): E.Either<string, Positive> =>
    n > 0 ? E.right(n as Positive) : E.left("Number must be positive"),
};

const NonEmptyString = {
  make: (s: string): E.Either<string, NonEmptyString> =>
    s.length > 0 ? E.right(s as NonEmptyString) : E.left("String must not be empty"),
};

// 使用例
const result1 = Positive.make(5); // Right(5)
const result2 = Positive.make(-1); // Left("Number must be positive")

const result3 = NonEmptyString.make("hello"); // Right("hello")
const result4 = NonEmptyString.make(""); // Left("String must not be empty")


if (E.isRight(result1)) {
  const value: Positive = result1.right;
  console.log("Valid Positive value:", value);
}

if (E.isRight(result3)) {
  const value: NonEmptyString = result3.right;
  console.log("Valid NonEmptyString value:", value);
}