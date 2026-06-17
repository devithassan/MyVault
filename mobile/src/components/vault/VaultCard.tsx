// src/components/vault/VaultCard.tsx

import { Pressable } from "react-native";

import { Card } from "@/components/ui/Card";
import Text from "@/components/ui/Text";

type Props = {
  title: string;
  subtitle?: string;
  onPress?: () => void;
};

export function VaultCard({
  title,
  subtitle,
  onPress,
}: Props) {
  return (
    <Pressable onPress={onPress}>
      <Card>
        <Text variant="title">
          {title}
        </Text>

        {subtitle && (
          <Text variant="muted">
            {subtitle}
          </Text>
        )}
      </Card>
    </Pressable>
  );
}