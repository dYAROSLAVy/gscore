export type Code = {
  code: string;
  id: number;
  status: string;
  origin: string;
};

export type CodeManagePutParams = {
  token?: string;
  codesIds?: number[];
  subscribeId?: number;
};

export type ActivateLicensePutParams = {
  token?: string;
  code?: string;
};
