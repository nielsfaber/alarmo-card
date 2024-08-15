export function isDefined<TValue>(value: TValue | null | undefined): value is TValue {
  return value !== null && value !== undefined;
}

export function isEmpty<TValue>(value: TValue | null | undefined): value is TValue {
  const type = typeof value;
  switch (type) {
    case 'object':
      return Object.keys(value as Record<string, any>).length == 0;
    case 'string':
      return String(value).length == 0;
    default:
      return !isDefined(value);
  }
}

export function isEqual(...arr: any[]) {
  return arr.every(e => JSON.stringify(e) === JSON.stringify(arr[0]));
}

interface Omit {
  <T extends object, K extends [...(keyof T)[]]>(obj: T, ...keys: K): {
    [K2 in Exclude<keyof T, K[number]>]: T[K2];
  };
}

export const omit: Omit = (obj, ...keys) => {
  const ret = {} as {
    [K in keyof typeof obj]: typeof obj[K];
  };
  let key: keyof typeof obj;
  for (key in obj) {
    if (!keys.includes(key)) {
      ret[key] = obj[key];
    }
  }
  return ret;
};

export function pick(obj: Record<string, any> | null | undefined, keys: string[]): Record<string, any> {
  if (!obj) return {};
  return Object.entries(obj)
    .filter(([key]) => keys.includes(key))
    .reduce((obj, [key, val]) => Object.assign(obj, { [key]: val }), {});
}
