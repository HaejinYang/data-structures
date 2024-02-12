// hashamp

class HashNode<K, V> {
  private _key: K;
  private _value: V;
  private _next: HashNode<K, V> | null;

  constructor(key: K, value: V) {
    this._key = key;
    this._value = value;
    this._next = null;
  }

  get value(): V {
    return this._value;
  }

  get key(): K {
    return this._key;
  }

  set next(node: HashNode<K, V>) {
    this._next = node;
  }

  get next(): HashNode<K, V> | null {
    return this._next;
  }
}

function Hash(tableSize: number): (key: number) => number {
  const size = tableSize;

  return function (key: number) {
    return key % size;
  };
}

interface Table<V> {
  [index: number]: HashNode<number, V>;
}

export class HashMap<V> {
  private _size: number;
  private _table: Table<V>;
  private _hash: (key: number) => number;

  constructor(tableSize) {
    this._size = tableSize;
    this._table = {};
    this._hash = Hash(this._size);
  }

  insert(key: number, value: V) {
    const node = new HashNode(key, value);
    const hashingKey = this._hash(key);

    if (this._table[hashingKey]) {
      let current = this._table[hashingKey];
      while (current.next) {
        console.log(current.value);
        current = current.next;
      }

      current.next = node;
    } else {
      this._table[hashingKey] = node;
    }
  }

  search(key) {
    const hashingKey = this._hash(key);
    let current = this._table[hashingKey];
    while (current) {
      if (current.key === key) {
        break;
      } else {
        current = current.next;
      }
    }

    if (current) {
      return current.value;
    } else {
      return null;
    }
  }
}

const map = new HashMap(200);
map.insert(100, 100);
map.insert(300, 300);
map.insert(500, 500);

console.log(map.search(300));
