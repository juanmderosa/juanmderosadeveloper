export function mapZodIssues(
  issues: { path: (string | number)[]; message: string }[],
): Record<string, string[]> {
  const errors: Record<string, string[]> = {};

  issues.forEach((issue) => {
    const field = issue.path[0];
    if (!field || typeof field !== "string") return;

    if (!errors[field]) {
      errors[field] = [];
    }

    errors[field].push(issue.message);
  });

  return errors;
}

export function isInputError(
  error: unknown,
): error is {
  type: "input";
  issues: { path: (string | number)[]; message: string }[];
} {
  return (
    typeof error === "object" &&
    error !== null &&
    "type" in error &&
    (error as any).type === "input" &&
    "issues" in error
  );
}
