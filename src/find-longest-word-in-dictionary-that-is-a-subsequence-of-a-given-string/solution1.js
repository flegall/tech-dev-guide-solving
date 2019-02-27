// @flow strict
export function solution1(
  sequence: string,
  words: $ReadOnlyArray<string>,
): string {
  return words
    .filter(word => isSubSequenceOf(word, sequence))
    .reduce((a, b) => (a.length > b.length ? a : b))
}

export function isSubSequenceOf(word: string, sequence: string): boolean {
  let currentPositionInSequence = 0

  for (let i = 0; i < word.length; i++) {
    const letterInWord = word[i]
    debugger
    const indexOfFoundLetterInSequence = sequence.indexOf(
      letterInWord,
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
