// // src/features/attachments/components/AttachmentCard.tsx


import { View } from "react-native";

import { Card } from "@/components/ui/Card";

import { useTheme } from "@/theme/useTheme";

import { Attachment } from "../attachment.types";

import { AttachmentActions } from "./AttachmentActions";
import { AttachmentMetadata } from "./AttachmentMetadata";
import { AttachmentPreview } from "./AttachmentPreview";

type Props = {
    attachment: Attachment;
    vaultId: string;
};

export function AttachmentCard({
    attachment,
    vaultId,
}: Props) {

    const theme = useTheme();

    return (

        <Card>

            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >

                <AttachmentPreview
                    attachment={attachment}
                />

                <AttachmentMetadata
                    attachment={attachment}
                />

            </View>

            <AttachmentActions
                attachment={attachment}
                vaultId={vaultId}
            />

        </Card>

    );

}






// import { useRouter } from "expo-router";
// import { Pressable, View } from "react-native";

// import { Card } from "@/components/ui/Card";
// import Text from "@/components/ui/Text";

// import { useTheme } from "@/theme/useTheme";

// import { useAttachmentStore } from "../attachment.store";
// import { Attachment } from "../attachment.types";
// import { useDeleteAttachment } from "../hooks/useDeleteAttachment";
// import { openAttachment } from "../utils/openAttachment";
// import { shareAttachment } from "../utils/shareAttachment";

// type Props = {
//   attachment: Attachment;
//   vaultId: string;
// };

// export function AttachmentCard({
//   attachment,
//   vaultId,
// }: Props) {
//   const theme = useTheme();
//   const router = useRouter();

//   const { deleteAttachment, loading } =
//     useDeleteAttachment();

//   const fetchAttachments =
//     useAttachmentStore(
//       (s) => s.fetchAttachments
//     );

//   const size =
//     attachment.size < 1024 * 1024
//       ? `${(
//           attachment.size / 1024
//         ).toFixed(1)} KB`
//       : `${(
//           attachment.size /
//           1024 /
//           1024
//         ).toFixed(1)} MB`;

//   const handleOpen = async () => {
//     const result =
//       await openAttachment(
//         attachment
//       );

//     if (!result) return;

//     switch (result.type) {
//       case "image":
//         router.push({
//           pathname:
//             "../image-viewer",
//           params: {
//             url: result.url,
//           },
//         });
//         return;

//       case "video":
//         router.push({
//           pathname:
//             "../video-player",
//           params: {
//             url: result.url,
//             title:
//               attachment.originalName,
//           },
//         });
//         return;

//       case "audio":
//         router.push({
//           pathname:
//             "../audio-player",
//           params: {
//             url: result.url,
//             title:
//               attachment.originalName,
//           },
//         });
//         return;

//       /**
//        * Documents are currently opened
//        * inside openAttachment().
//        *
//        * Once a dedicated document viewer
//        * (PDF/Office) exists, only
//        * openAttachment() needs updating.
//        */
//       case "document":
//         return;

//       default:
//         return;
//     }
//   };

//   const handleShare =
//     async () => {
//       try {
//         await shareAttachment(
//           attachment
//         );
//       } catch (error) {
//         console.error(
//           "Share failed",
//           error
//         );
//       }
//     };

//   const handleDelete =
//     async () => {
//       const ok =
//         await deleteAttachment(
//           attachment._id
//         );

//       if (ok) {
//         await fetchAttachments(
//           vaultId
//         );
//       }
//     };

//   return (
//     <Card>
//       <Text variant="subtitle">
//         {attachment.originalName}
//       </Text>

//       <Text
//         variant="muted"
//         style={{
//           marginTop:
//             theme.spacing.xs,
//           textTransform:
//             "capitalize",
//         }}
//       >
//         {attachment.category}
//       </Text>

//       <Text
//         variant="caption"
//         style={{
//           marginTop:
//             theme.spacing.xs,
//         }}
//       >
//         {size}
//       </Text>

//       <View
//         style={{
//           flexDirection: "row",
//           justifyContent:
//             "space-between",
//           alignItems: "center",
//           marginTop:
//             theme.spacing.md,
//         }}
//       >
//         <Pressable
//           onPress={handleOpen}
//         >
//           <Text
//             style={{
//               color:
//                 theme.colors.primary,
//             }}
//           >
//             Open
//           </Text>
//         </Pressable>

//         <Pressable
//           onPress={handleShare}
//         >
//           <Text
//             style={{
//               color:
//                 theme.colors.primary,
//             }}
//           >
//             Share
//           </Text>
//         </Pressable>

//         <Pressable
//           disabled={loading}
//           onPress={handleDelete}
//         >
//           <Text
//             style={{
//               color:
//                 loading
//                   ? theme.colors.textSecondary
//                   : "#dc2626",
//             }}
//           >
//             {loading
//               ? "Deleting..."
//               : "Delete"}
//           </Text>
//         </Pressable>
//       </View>
//     </Card>
//   );
// }

