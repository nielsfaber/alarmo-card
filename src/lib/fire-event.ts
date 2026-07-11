declare global {
  interface HASSDomEvents {
    [event: string]: unknown;
  }
}

export type ValidHassDomEvent = keyof HASSDomEvents;

export interface HASSDomEvent<T> extends Event {
  detail: T;
}

export const fireEvent = (
  node: HTMLElement | Window,
  type: string,
  detail?: unknown,
  options?: {
    bubbles?: boolean;
    cancelable?: boolean;
    composed?: boolean;
  }
) => {
  const event = new CustomEvent(type, {
    detail: detail ?? {},
    bubbles: options.bubbles === undefined ? true : options.bubbles,
    cancelable: Boolean(options.cancelable),
    composed: options.composed === undefined ? true : options.composed,
  });
  node.dispatchEvent(event);
  return event;
};
