export const isFetchBaseQueryError = (
  error: unknown
): error is { data: { message: string } } => {
  return typeof error === "object" && error != null && "status" in error;
};
