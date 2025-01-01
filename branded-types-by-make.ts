// Fix
import {Either as E} from "npm:effect";
import type {Brand as B} from "npm:effect";

type Positive = B.Branded<number, "Positive">;
type NonEmptyString = B.Branded<string, "NonEmptyString">;

const Positive = {
  make: (n: number): E.Either<string, Positive> =>
    n > 0 ? E.right(n as Positive) : E.left("Number must be positive"),
};

const NonEmptyString = {
  make: (s: string): E.Either<string, NonEmptyString> =>
    s.length > 0 ? E.right(s as NonEmptyString) : E.left("String must not be empty"),
};

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