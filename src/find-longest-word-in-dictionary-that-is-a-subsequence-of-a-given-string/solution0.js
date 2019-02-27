// @flow strict
export function solution0(
  sequence: string,
  words: $ReadOnlyArray<string>,
): ?string {
  const subSequences = allSubSequences(sequence)
  return [...words]
    .sort((a, b) => b.length - a.length)
    .find(word => subSequences[word])
}

export function allSubSequences(sequence: string): { [string]: true } {
  if (sequence.length === 0) {
    return { "": true }
  } else {
    const char = sequence[0]
    const subSequences = allSubSequences(sequence.substring(1))
    return Object.keys(subSequences).reduce(
      (sequences, sequence) => ({ ...sequences, [char + sequence]: true }),
      subSequences,
    )
  }
}
