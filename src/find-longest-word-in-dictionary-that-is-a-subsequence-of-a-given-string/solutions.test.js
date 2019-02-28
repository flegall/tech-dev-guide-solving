// @flow strict
import { solution0, allSubSequences } from "./solution0"
import { solution0_5, Trie } from "./solution0_5"
import { solution1, isSubSequenceOf } from "./solution1"
import { solution2, findIndexAfter } from "./solution2"

test("solution0", () => {
  const S = "abppplee"
  const D = ["able", "ale", "apple", "bale", "kangaroo"]

  const word = solution0(S, D)

  expect(word).toEqual("apple")
})

test("allSubSequences", () => {
  expect(allSubSequences("")).toEqual({ "": true })
  expect(allSubSequences("ab")).toEqual({
    "": true,
    a: true,
    b: true,
    ab: true,
  })
})

test("solution0_5", () => {
  const S = "abppplee"
  const D = ["able", "ale", "apple", "bale", "kangaroo"]

  const word = solution0_5(S, D)

  expect(word).toEqual("apple")
})

test("Trie", () => {
  expect(new Trie().addPrefixCharacter("c").hasWord("c")).toBe(true)
  expect(
    new Trie()
      .addPrefixCharacter("c")
      .addPrefixCharacter("a")
      .hasWord("c"),
  ).toBe(true)
  expect(
    new Trie()
      .addPrefixCharacter("c")
      .addPrefixCharacter("a")
      .hasWord("a"),
  ).toBe(true)
  expect(
    new Trie()
      .addPrefixCharacter("d")
      .addPrefixCharacter("a")
      .hasWord("ad"),
  ).toBe(true)
  expect(
    new Trie()
      .addPrefixCharacter("e")
      .addPrefixCharacter("e")
      .addPrefixCharacter("l")
      .addPrefixCharacter("p")
      .addPrefixCharacter("p")
      .addPrefixCharacter("p")
      .addPrefixCharacter("b")
      .addPrefixCharacter("a")
      .hasWord("appple"),
  ).toBe(true)
})

test("solution1", () => {
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

test("solution2", () => {
  const S = "abppplee"
  const D = ["able", "ale", "apple", "bale", "kangaroo"]

  const word = solution2(S, D)

  expect(word).toEqual("apple")
})

test("findIndexAfter", () => {
  expect(findIndexAfter([1], 1)).toBe(1)
  expect(findIndexAfter([1, 2], 1)).toBe(1)
  expect(findIndexAfter([1, 2], 2)).toBe(2)
  expect(findIndexAfter([1, 2, 4], 3)).toBe(4)
  expect(findIndexAfter([1, 2, 4, 5, 9, 10], 7)).toBe(9)
})
