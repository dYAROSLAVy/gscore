export const isFetchBaseQueryError = (
  error: unknown
): error is { data: { message: string } } => {
  return typeof error === "object" && error != null && "status" in error;
};

export const isErrorWithMessage = (
  error: unknown
): error is { message: string } => {
  return (
    typeof error === "object" &&
    error != null &&
    "message" in error &&
    typeof (error as any).message === "string"
  );
};
