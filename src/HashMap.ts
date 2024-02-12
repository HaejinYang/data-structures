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

export class HashMap<V> {
  private _size: number;
  private _table: Array<HashNode<number, V>>;
  private _hash: (key: number) => number;

  constructor(tableSize) {
    this._size = tableSize;
    this._table = [];
    this._hash = Hash(this._size);
  }

  insert(key: number, value: V) {
    const node = new HashNode(key, value);
    const hashingKey = this._hash(key);

    if (this._table[hashingKey]) {
      let current = this._table[hashingKey];
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    } else {
      // array의 index(A)에 바로 접근하여 삽입하면,
      // 기존 array의 가장 큰 index와 A사이가 모두 undefined로 채워진다.
      // 그래서, key가 만약 1억이다? 그러면 1억개의 엘리먼트가 새로 생성되어 undefined로 채워진다고 생각할 수 있겠지만,
      // hash함수에서 조절해주므로 위와 같은 걱정은 하지 않아도 됨.
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
