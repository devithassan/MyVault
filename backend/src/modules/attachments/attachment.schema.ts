//src/modules/attachments/attachment.schema.ts

import { z } from "zod";

export const attachmentIdSchema =
  z.object({
    id: z.string(),
  });