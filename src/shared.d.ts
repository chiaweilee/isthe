export interface BaseOptions {
  locale?: {
    [key: string]: string;
  };
}

export interface BaseResult {
  target: any;
  valid: boolean;
  msg?: string;
}
