//src/features/attachments/components/AttachmentActions.tsx


import { Pressable, View } from "react-native";

import { useRouter } from "expo-router";

import Text from "@/components/ui/Text";

import { useTheme } from "@/theme/useTheme";

import { Attachment } from "../attachment.types";

import { openAttachment } from "../utils/openAttachment";
import { shareAttachment } from "../utils/shareAttachment";

import { useAttachmentStore } from "../attachment.store";
import { useDeleteAttachment } from "../hooks/useDeleteAttachment";

type Props = {
    attachment: Attachment;
    vaultId: string;
};

export function AttachmentActions({
    attachment,
    vaultId,
}: Props) {

    const theme = useTheme();

    const router = useRouter();

    const {
        deleteAttachment,
        loading,
    } = useDeleteAttachment();

    const fetchAttachments =
        useAttachmentStore(
            s => s.fetchAttachments
        );

    async function handleOpen() {

        const result =
            await openAttachment(
                attachment
            );

        if (!result) return;

        switch (result.type) {

            case "image":

                router.push({
                    pathname: "../image-viewer",
                    params: {
                        url: result.url,
                    },
                });

                return;

            case "video":

                router.push({
                    pathname: "../video-player",
                    params: {
                        url: result.url,
                        title: attachment.originalName,
                    },
                });

                return;

            case "audio":

                router.push({
                    pathname: "../audio-player",
                    params: {
                        url: result.url,
                        title: attachment.originalName,
                    },
                });

                return;

            case "document":
                router.push({
                pathname: "../document-viewer",
                params: {
                    url: result.url,
                    title: result.title,
                },
                });
                return;
        }

    }

    async function handleDelete() {

        const ok =
            await deleteAttachment(
                attachment._id
            );

        if (ok) {

            await fetchAttachments(
                vaultId
            );

        }

    }

    return (

        <View

            style={{

                flexDirection: "row",

                justifyContent: "space-between",

                alignItems: "center",

                marginTop: theme.spacing.md,

            }}

        >

            <Pressable onPress={handleOpen}>

                <Text

                    style={{

                        color: theme.colors.primary,

                    }}

                >

                    Open

                </Text>

            </Pressable>

            <Pressable

                onPress={() =>
                    shareAttachment(
                        attachment
                    )
                }

            >

                <Text

                    style={{

                        color: theme.colors.primary,

                    }}

                >

                    Share

                </Text>

            </Pressable>

            <Pressable

                disabled={loading}

                onPress={handleDelete}

            >

                <Text

                    style={{

                        color: loading
                            ? theme.colors.textSecondary
                            : "#dc2626",

                    }}

                >

                    {loading
                        ? "Deleting..."
                        : "Delete"}

                </Text>

            </Pressable>

        </View>

    );

}