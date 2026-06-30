//src/features/attachments/components/AttachmentPreview.tsx

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "expo-image";

import { View } from "react-native";

import { Attachment } from "../attachment.types";
import { getAttachmentIcon } from "../utils/getAttachmentIcon";

import { useTheme } from "@/theme/useTheme";

type Props = {
  attachment: Attachment;
};

export function AttachmentPreview({
  attachment,
}: Props) {
  const theme = useTheme();

  if (attachment.category === "image") {
    return (
      <Image
        source={{ uri: attachment.url }}
        style={{
          width: 72,
          height: 72,
          borderRadius: 12,
        }}
        cachePolicy="memory-disk"
        contentFit="cover"
      />
    );
  }

  return (
    <View
      style={{
        width: 72,
        height: 72,
        borderRadius: 12,
        backgroundColor: theme.colors.surface,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons
        name={getAttachmentIcon(
          attachment
        )}
        size={34}
        color={theme.colors.primary}
      />
    </View>
  );
}