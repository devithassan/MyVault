export function formatAttachmentDate(
  date: string
) {
  return new Date(date).toLocaleDateString(
    undefined,
    {
      day: "numeric",
      month: "short",
      year: "numeric",
    }
  );
}