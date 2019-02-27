// @flow strict
export function solution0_5(
  sequence: string,
  words: $ReadOnlyArray<string>,
): ?string {
  const subSequences = allSubSequencesTrie(sequence)
  return [...words]
    .sort((a, b) => b.length - a.length)
    .find(word => subSequences.hasWord(word))
}

export function allSubSequencesTrie(sequence: string): Trie {
  if (sequence.length === 0) {
    return new Trie()
  } else {
    const char = sequence[0]
    return allSubSequencesTrie(sequence.substring(1)).addPrefixCharacter(char)
  }
}

export class Trie {
  +tree: { [character: string]: Trie }

  constructor(tree: { [character: string]: Trie } = {}) {
    this.tree = tree
  }

  hasWord(word: string): boolean {
    if (word.length > 1) {
      const firstChar = word[0]
      const subTrie = this.tree[firstChar]
      return !!subTrie && subTrie.hasWord(word.substring(1))
    }
    return !!this.tree[word]
  }

  addPrefixCharacter(character: string): Trie {
    if (character.length > 1) {
      throw new Error("addPrefixCharacter() works only with single characters.")
    }
    return new Trie({ ...this.tree, [character]: this })
  }
}
