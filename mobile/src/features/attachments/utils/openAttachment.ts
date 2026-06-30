// src/features/attachments/utils/openAttachment.ts

import * as Linking from "expo-linking";

import { Attachment } from "../attachment.types";

export type AttachmentOpenResult =
  | {
      type: "image";
      url: string;
      title: string;
    }
  | {
      type: "video";
      url: string;
      title: string;
    }
  | {
      type: "audio";
      url: string;
      title: string;
    }
  | {
      type: "document";
      url: string;
      title: string;
    }
  | null;

async function openExternally(url: string) {
  const supported =
    await Linking.canOpenURL(url);

  if (!supported) {
    throw new Error(
      `Cannot open URL: ${url}`
    );
  }

  await Linking.openURL(url);
}

export async function openAttachment(
  attachment: Attachment
): Promise<AttachmentOpenResult> {
  const result = {
    url: attachment.url,
    title: attachment.originalName,
  };

  switch (attachment.category) {
    case "image":
      return {
        type: "image",
        ...result,
      };

    case "video":
      return {
        type: "video",
        ...result,
      };

    case "audio":
      return {
        type: "audio",
        ...result,
      };

    /**
     * Documents.
     *
     * Today:
     * handled externally.
     *
     * Future:
     * change ONLY this block to
     * return
     *
     * type: "document"
     *
     * once Vault has its own
     * PDF / Office viewer.
     */
    // case "document":
    //   await openExternally(
    //     attachment.url
    //   );
    //   return null;
      case "document":
        return {
          type: "document",
          ...result,
        };
    /**
     * ZIP
     * APK
     * EXE
     * PSD
     * AI
     * DWG
     * Unknown
     *
     * Let the operating system
     * decide the correct app.
     */
    case "other":
    default:
      await openExternally(
        attachment.url
      );
      return null;
  }
}








// //src/features/attachments/utils/openAttachment.ts

// import * as Linking from "expo-linking";

// import { Attachment } from "../attachment.types";

// async function openExternal(url: string) {
//   const supported =
//     await Linking.canOpenURL(url);

//   if (!supported) {
//     throw new Error(
//       "Cannot open attachment."
//     );
//   }

//   await Linking.openURL(url);
// }

// export async function openAttachment(
//   attachment: Attachment
// ) {
//   switch (attachment.category) {
//     case "image":
//       return {
//         type: "image",
//         url: attachment.url,
//       };

//     case "video":
//       return {
//         type: "video",
//         url: attachment.url,
//       };

//     // case "audio":
//     //   return {
//     //     type: "audio",
//     //     url: attachment.url,
//     //   };
//     case "audio":
//       return {
//         type: "audio",
//         url: attachment.url,
//         name: attachment.originalName,
//       };    

//     case "document":
//       return {
//         type: "document",
//         url: attachment.url,
//       };

//     default:
//       await openExternal(
//         attachment.url
//       );

//       return null;
//   }
// }






// //src/features/attachments/utils/openAttachment.ts

// import * as Linking from "expo-linking";
// import * as WebBrowser from "expo-web-browser";

// import { Attachment } from "../attachment.types";

// async function openExternal(url: string) {
//   const supported =
//     await Linking.canOpenURL(url);

//   if (!supported) {
//     throw new Error(
//       "Cannot open attachment."
//     );
//   }

//   await Linking.openURL(url);
// }

// export async function openAttachment(
//   attachment: Attachment
// ) {
//   switch (attachment.category) {
//     case "image":
//       return {
//         type: "image",
//         url: attachment.url,
//       };

//     case "document":
//       await WebBrowser.openBrowserAsync(
//         attachment.url
//       );
//       return null;

//     case "video":
//       await openExternal(
//         attachment.url
//       );
//       return null;

//     case "audio":
//       await openExternal(
//         attachment.url
//       );
//       return null;

//     default:
//       await openExternal(
//         attachment.url
//       );
//       return null;
//   }
// }



// import * as Linking from "expo-linking";
// import * as WebBrowser from "expo-web-browser";

// import { Attachment } from "../attachment.types";

// export async function openAttachment(
//   attachment: Attachment
// ) {
//   switch (attachment.category) {
//     case "image":
//       return {
//         type: "image",
//         url: attachment.url,
//       };

//     case "video":
//       await Linking.openURL(
//     //     attachment.url
//     //   );
//     //   return null;
//     const supported =
//   await Linking.canOpenURL(
//     attachment.url
//   );

// if (!supported) {
//   throw new Error(
//     "Cannot open attachment."
//   );
// }

// await Linking.openURL(
//   attachment.url
// );

//     case "audio":
//     //   await Linking.openURL(
//     //     attachment.url
//     //   );
//         const supported =
//         await Linking.canOpenURL(
//             attachment.url
//         );

//         if (!supported) {
//         throw new Error(
//             "Cannot open attachment."
//         );
//         }

//         await Linking.openURL(
//         attachment.url
//         );
//       return null;

//     case "document":
//       await WebBrowser.openBrowserAsync(
//         attachment.url
//       );
//       return null;

//     default:
//     //   await Linking.openURL(
//     //     attachment.url
//     //   );
//     const supported =
//         await Linking.canOpenURL(
//             attachment.url
//         );

//         if (!supported) {
//         throw new Error(
//             "Cannot open attachment."
//         );
//         }

//         await Linking.openURL(
//         attachment.url
//         );
//       return null;
//   }
// }