//src/features/attachments/components/AttachmentList.tsx

import { useEffect } from "react";

import {
    ActivityIndicator,
    View,
} from "react-native";

import Text from "@/components/ui/Text";

import { useTheme } from "@/theme/useTheme";

import { useAttachmentStore } from "../attachment.store";
import { AttachmentCard } from "./AttachmentCard";

type Props = {
  vaultId: string;
};

export function AttachmentList({
  vaultId,
}: Props) {
  const theme = useTheme();

  const attachments =
    useAttachmentStore(
      (s) => s.attachments
    );

  const loading =
    useAttachmentStore(
      (s) => s.loading
    );

  const fetchAttachments =
    useAttachmentStore(
      (s) => s.fetchAttachments
    );

  useEffect(() => {
    fetchAttachments(vaultId);
  }, [vaultId]);

  if (loading) {
    return (
      <View
        style={{
          paddingVertical:
            theme.spacing.lg,
          alignItems: "center",
        }}
      >
        <ActivityIndicator />
      </View>
    );
  }

  if (!attachments.length) {
    return (
      <Text variant="muted">
        No attachments yet
      </Text>
    );
  }

  return (
    <View
      style={{
        gap: theme.spacing.md,
      }}
    >
      {attachments.map(
        (attachment) => (
          <AttachmentCard
            key={attachment._id}
            attachment={
              attachment
            }
            vaultId={vaultId}
          />
        )
      )}
    </View>
  );
}