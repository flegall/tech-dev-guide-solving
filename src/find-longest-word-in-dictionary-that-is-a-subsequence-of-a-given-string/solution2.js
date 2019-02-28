// @flow strict
export function solution2(
  sequence: string,
  words: $ReadOnlyArray<string>,
): ?string {
  const sequenceObject = [...sequence].reduce(
    (object, character, index) => ({
      ...object,
      [character]: [...(object[character] || []), index],
    }),
    {},
  )
  return [...words]
    .sort((a, b) => b.length - a.length)
    .find(word => isSubSequenceOf(word, sequenceObject))
}

export function isSubSequenceOf(
  word: string,
  sequenceObject: { [string]: $ReadOnlyArray<number> },
): boolean {
  let currentPositionInSequence = 0

  for (let i = 0; i < word.length; i++) {
    const letterInWord = word[i]
    const indexOfFoundLetterInSequence = findIndexAfter(
      sequenceObject[letterInWord],
      currentPositionInSequence,
    )
    if (indexOfFoundLetterInSequence === -1) {
      return false
    } else {
      currentPositionInSequence = indexOfFoundLetterInSequence + 1
    }
  }
  return true
}

export function findIndexAfter(
  array: ?$ReadOnlyArray<number>,
  afterIndex: number,
): number {
  if (!array) {
    return -1
  }
  for (let i = 0; i < array.length; i++) {
    const index = array[i]
    if (afterIndex <= index) {
      return index
    }
  }
  return -1
}
