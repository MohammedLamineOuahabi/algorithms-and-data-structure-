//  hashes are ONE way
//  deterministic :always produce the same value
// 2 most common addressing methods to deal with collision:
// 1-separate chaining
// 2-linear probing

//-Both Insert and Lookup by key in a Hash Table is O(1):true
//-Since a Hash Table is O(1) for Insert and Lookup it is always better than a Binary Search Tree:false
//Binary Search Trees are sorted which makes them better at searching for all values that fall within a range.
//-Key lookup is O(1) but not value.

// implement separate chaining:
class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }
  //_ indicate that this method is called only by other methods(private)
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }
  set(key, value) {
    let index = this._hash(key);
    if (!this.dataMap[index]) this.dataMap[index] = [];
    this.dataMap[index].push([key, value]);
    return this;
  }
  get(key) {
    //  get the index using the _hash function
    //
    let index = this._hash(key);
    if (this.dataMap[index]) {
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0] == key)
          //  return the value : position 1
          return this.dataMap[index][i][1];
      }
    }
    return undefined;
  }
  keys() {
    let keys = [];
    for (let i = 0; i < this.dataMap.length; i++) {
      if (this.dataMap[i]) {
        for (let j = 0; j < this.dataMap[i].length; j++) {
          keys.push(this.dataMap[i][j][0]);
        }
      }
    }
    return keys;
  }
}

let MyHashTable = new HashTable();
MyHashTable.set('pens', 100);
MyHashTable.set('snep', 1050);
console.log(MyHashTable.get('pens'));
console.log(MyHashTable.get('snep'));
console.log(MyHashTable.get('sne5p'));
console.log(MyHashTable.keys());
