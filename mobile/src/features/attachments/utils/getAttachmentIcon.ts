import { MaterialCommunityIcons } from "@expo/vector-icons";
import type { ComponentProps } from "react";

import { Attachment } from "../attachment.types";

type IconName = ComponentProps<
  typeof MaterialCommunityIcons
>["name"];

export function getAttachmentIcon(
  attachment: Attachment
): IconName {
  switch (attachment.category) {
    case "image":
      return "image";

    case "video":
      return "video";

    case "audio":
      return "music";

    case "document": {
      const mime = attachment.mimeType.toLowerCase();

      if (mime.includes("pdf"))
        return "file-pdf-box";

      if (
        mime.includes("word") ||
        mime.includes("document")
      )
        return "file-word-box";

      if (
        mime.includes("excel") ||
        mime.includes("sheet")
      )
        return "file-excel-box";

      if (
        mime.includes("presentation") ||
        mime.includes("powerpoint")
      )
        return "file-powerpoint-box";

      if (mime.includes("text"))
        return "file-document";

      return "file";
    }

    default:
      return "file";
  }
}