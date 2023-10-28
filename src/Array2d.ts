type Tile<T> = {
  isAssign: boolean;
  data: T | null;
};

class Array2d<T> {
  private arr: Tile<T>[][];
  private _row: number;
  private _col: number;
  constructor(row: number, col: number) {
    this._row = row;
    this._col = col;

    const temp = new Array<Tile<T>>(this._row)
      .fill({ isAssign: false, data: null })
      .map((_) =>
        new Array<Tile<T>>(this._col)
          .fill({ isAssign: false, data: null })
          .map((_) => {
            return { isAssign: false, data: null };
          })
      );

    this.arr = temp;
  }

  get(row: number, col: number): T | null {
    this.checkOutOfRange(row, col);

    const tile = this.arr[row][col];
    if (tile.isAssign === false) {
      return null;
    }

    return tile.data;
  }

  put(row: number, col: number, item: T) {
    this.checkOutOfRange(row, col);

    const tile = this.arr[row][col];
    tile.isAssign = true;
    tile.data = item;
  }

  delete(row: number, col: number) {
    this.checkOutOfRange(row, col);

    const tile = this.arr[row][col];
    tile.isAssign = false;
  }

  get row(): number {
    return this._row;
  }

  get col(): number {
    return this._col;
  }

  private checkOutOfRange(row: number, col: number) {
    if (row < 0 || row >= this._row || col < 0 || col >= this._col) {
      throw Error("out of range");
    }
  }
}

export { Array2d };
