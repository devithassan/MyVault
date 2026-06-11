import { Card } from "@/components/ui/Card";
import { Text } from "@/components/ui/Text";

export function VaultCard({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <Card>
      <Text variant="title">{title}</Text>
      {subtitle && <Text color="secondary">{subtitle}</Text>}
    </Card>
  );
}