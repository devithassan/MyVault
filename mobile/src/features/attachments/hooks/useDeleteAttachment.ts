//src/features/attachments/hooks/useDeleteAttachment.ts


import { useState } from "react";

import { attachmentService } from "../attachment.service";
import { useAttachmentStore } from "../attachment.store";

export function useDeleteAttachment() {
  const [loading, setLoading] = useState(false);

//   const deleteFromState = useAttachmentStore(
//     (s) => s.deleteAttachmentFromState
//   );

    const removeAttachment = useAttachmentStore(
    (s) => s.removeAttachment
    );

  async function deleteAttachment(attachmentId: string) {
    try {
      setLoading(true);

      // 1. Optimistic UI update (instant remove)
    //   deleteFromState(attachmentId);
    removeAttachment(attachmentId);
      // 2. Backend delete
      await attachmentService.deleteAttachment(attachmentId);

      return true;
    } catch (error) {
      console.error(error);

      // optional: rollback can be added later

      return false;
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    deleteAttachment,
  };
}



// import { useState } from "react";

// import { attachmentService } from "../attachment.service";

// export function useDeleteAttachment() {
//   const [loading, setLoading] =
//     useState(false);

//   async function deleteAttachment(
//     attachmentId: string
//   ) {
//     try {
//       setLoading(true);

//       await attachmentService.deleteAttachment(
//         attachmentId
//       );

//       return true;
//     } catch (error) {
//       console.error(error);
//       return false;
//     } finally {
//       setLoading(false);
//     }
//   }

//   return {
//     loading,
//     deleteAttachment,
//   };
// }