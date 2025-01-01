// Fix
import {Either as E} from "npm:effect";
import type {Brand as B} from "npm:effect";
import {Schema as S} from "npm:effect";

// Branded Typeの定義
type Positive = B.Branded<number, "Positive">;
type NonEmptyString = B.Branded<string, "NonEmptyString">;

// Schema定義
const PositiveSchema = S.Number.pipe(
  S.greaterThan(0),
  S.brand<Positive>()
);

const NonEmptyStringSchema = S.String.pipe(
  S.minLength(1),
  S.brand<NonEmptyString>()
);

// 型を安全に作成するための関数
const Positive = {
  make: (n: number): E.Either<string, Positive> =>
    S.parseEither(PositiveSchema)(n),
};

const NonEmptyString = {
  make: (s: string): E.Either<string, NonEmptyString> =>
    S.parseEither(NonEmptyStringSchema)(s),
};

// 使用例
const result1 = Positive.make(5); // Right(5)
const result2 = Positive.make(-1); // Left("Expected a number greater than 0")

const result3 = NonEmptyString.make("hello"); // Right("hello")
const result4 = NonEmptyString.make(""); // Left("Expected a string with a minimum length of 1")

// 型チェック例
if (E.isRight(result1)) {
  const value: Positive = result1.right;
  console.log("Valid Positive value:", value);
}

if (E.isRight(result3)) {
  const value: NonEmptyString = result3.right;
  console.log("Valid NonEmptyString value:", value);
}
