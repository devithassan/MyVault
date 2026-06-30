//src/features/attachments/utils/shareAttachment.ts

// import * as FileSystem from "expo-file-system";
import * as FileSystem from "expo-file-system/legacy";
import * as Sharing from "expo-sharing";

import { Attachment } from "../attachment.types";

export async function shareAttachment(
  attachment: Attachment
) {
  if (!attachment.url) {
    throw new Error("Attachment URL not found.");
  }

  const fileUri =
    FileSystem.cacheDirectory +
    attachment.originalName;

  const download =
    await FileSystem.downloadAsync(
      attachment.url,
      fileUri
    );

  const available =
    await Sharing.isAvailableAsync();

  if (!available) {
    throw new Error(
      "Sharing is not available on this device."
    );
  }

  await Sharing.shareAsync(
    download.uri
  );
}