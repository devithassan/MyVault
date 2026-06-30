
// //src/features/attachments/components/AttachmentMetadata.tsx

import { View } from "react-native";

import Text from "@/components/ui/Text";

import { Attachment } from "../attachment.types";

import { formatAttachmentDate } from "../utils/formatAttachmentDate";
import { formatAttachmentSize } from "../utils/formatAttachmentSize";

import { AttachmentBadge } from "./AttachmentBadge";

type Props = {
  attachment: Attachment;
};

export function AttachmentMetadata({
  attachment,
}: Props) {

  return (

    <View
      style={{
        flex: 1,
        marginLeft: 16,
      }}
    >

      <Text
        variant="subtitle"
        numberOfLines={1}
        ellipsizeMode="middle"
      >
        {attachment.originalName}
      </Text>

      <View
        style={{
          marginTop: 6,
        }}
      >

        <AttachmentBadge
          label={attachment.category}
        />

      </View>

      <Text
        variant="caption"
        style={{
          marginTop: 8,
        }}
      >
        {formatAttachmentSize(
          attachment.size
        )}
      </Text>

      <Text
        variant="caption"
      >
        {formatAttachmentDate(
          attachment.createdAt
        )}
      </Text>

    </View>

  );

}









// import { View } from "react-native";

// import Text from "@/components/ui/Text";

// import { Attachment } from "../attachment.types";

// import { useTheme } from "@/theme/useTheme";

// type Props = {
//   attachment: Attachment;
// };

// export function AttachmentMetadata({
//   attachment,
// }: Props) {
//   const theme = useTheme();

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

//   return (
//     <View
//       style={{
//         flex: 1,
//         marginLeft: theme.spacing.md,
//       }}
//     >
//       <Text
//         variant="subtitle"
//         numberOfLines={1}
//       >
//         {attachment.originalName}
//       </Text>

//       <Text
//         variant="muted"
//         style={{
//           marginTop: theme.spacing.xs,
//         }}
//       >
//         {attachment.category}
//       </Text>

//       <Text
//         variant="caption"
//         style={{
//           marginTop: theme.spacing.xs,
//         }}
//       >
//         {size}
//       </Text>
//     </View>
//   );
// }