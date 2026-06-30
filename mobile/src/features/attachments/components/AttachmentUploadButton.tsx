// src/features/attachments/components/AttachmentUploadButton.tsx

import * as DocumentPicker from "expo-document-picker";
// import * as ImagePicker from "expo-image-picker";

import { Alert } from "react-native";

import Button from "@/components/ui/Button";

import { attachmentService } from "../attachment.service";
import { useAttachmentStore } from "../attachment.store";

type Props = {
  vaultId: string;
};

export function AttachmentUploadButton({
  vaultId,
}: Props) {
  const addAttachment =
    useAttachmentStore(
      (s) => s.addAttachment
    );

  const pickDocument = async () => {
    const result =
      await DocumentPicker.getDocumentAsync({
        multiple: false,
        copyToCacheDirectory: true,
      });

    if (result.canceled) return;

    const asset =
      result.assets[0];

    const formData =
      new FormData();

    formData.append(
      "file",
      {
        uri: asset.uri,
        name: asset.name,
        type:
          asset.mimeType ??
          "application/octet-stream",
      } as any
    );

    try {
      const attachment =
        await attachmentService.upload(
          vaultId,
          formData
        );

      addAttachment(
        attachment
      );
    } catch {
      Alert.alert(
        "Upload Failed",
        "Please try again."
      );
    }
  };

  return (
    <Button
      title="Add Attachment"
      onPress={pickDocument}
    />
  );
}