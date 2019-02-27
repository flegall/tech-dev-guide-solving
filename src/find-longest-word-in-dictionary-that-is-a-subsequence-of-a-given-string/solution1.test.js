// @flow strict
import { solution1, isSubSequenceOf } from "./solution1"

test("challenge", () => {
  const S = "abppplee"
  const D = ["able", "ale", "apple", "bale", "kangaroo"]

  const word = solution1(S, D)

  expect(word).toEqual("apple")
})

test("isSubSequenceOf", () => {
  expect(isSubSequenceOf("a", "b")).toBe(false)
  expect(isSubSequenceOf("a", "a")).toBe(true)
  expect(isSubSequenceOf("a", "aa")).toBe(true)
  expect(isSubSequenceOf("ap", "aa")).toBe(false)
  expect(isSubSequenceOf("ap", "app")).toBe(true)
  expect(isSubSequenceOf("app", "app")).toBe(true)
  expect(isSubSequenceOf("apple", "abppplee")).toBe(true)
  expect(isSubSequenceOf("apple", "abplee")).toBe(false)
})
