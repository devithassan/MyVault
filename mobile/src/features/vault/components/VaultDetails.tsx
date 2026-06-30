// src/features/vault/components/VaultDetails.tsx
import * as Clipboard from "expo-clipboard";
import { useState } from "react";
import { Pressable, View } from "react-native";

import { AttachmentList } from "@/features/attachments/components/AttachmentList";
import { AttachmentUploadButton } from "@/features/attachments/components/AttachmentUploadButton";

import { Card } from "@/components/ui/Card";
import Text from "@/components/ui/Text";

import { useTheme } from "@/theme/useTheme";

import { Vault } from "../vault.types";

type Props = {
  vault: Vault;
};


function CopyRow({
  label,
  value,
}: {
  label: string;
  value?: string;
}) {
  const theme = useTheme();
  const [copied, setCopied] =
    useState(false);

  if (!value) return null;

  const handleCopy = async () => {
    await Clipboard.setStringAsync(
      value
    );

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1200);
  };

  return (
    <View
      style={{
        marginBottom:
          theme.spacing.md,
      }}
    >
      <Text variant="muted">
        {label}
      </Text>

      <View
        style={{
          marginTop: 4,
          flexDirection: "row",
          justifyContent:
            "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            flex: 1,
          }}
          numberOfLines={1}
        >
          {value}
        </Text>

        <Pressable onPress={handleCopy}>
          <Text
            style={{
              color:
                theme.colors.primary,
              marginLeft: 12,
            }}
          >
            {copied
              ? "Copied"
              : "Copy"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}


function DetailRow({
  label,
  value,
}: {
  label: string;
  value?: string;
}) {
  const theme = useTheme();

  if (!value) return null;

  return (
    <View
      style={{
        marginBottom:
          theme.spacing.md,
      }}
    >
      <Text variant="muted">
        {label}
      </Text>

      <Text
        style={{
          marginTop: 4,
        }}
      >
        {value}
      </Text>
    </View>
  );
}

export function VaultDetails({ vault }: Props) {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={{ gap: theme.spacing.md }}>
      <Card>
        <DetailRow label="Category" value={vault.category} />

        <CopyRow label="Username" value={vault.username} />
        <CopyRow label="Email" value={vault.email} />
        <CopyRow label="Website" value={vault.website} />

        {/* Password (special case) */}

        {vault.password ? (
          <View style={{ marginBottom: theme.spacing.md }}>
            <Text variant="muted">Password</Text>

            <View
              style={{
                marginTop: 4,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ flex: 1 }} numberOfLines={1}>
                {showPassword ? vault.password : "••••••••••••"}
              </Text>

              <View style={{ flexDirection: "row", gap: 12 }}>
                <Pressable onPress={() => setShowPassword(!showPassword)}>
                  <Text style={{ color: theme.colors.primary }}>
                    {showPassword ? "Hide" : "Show"}
                  </Text>
                </Pressable>

                <Pressable
                  onPress={async () => {
                    if (vault.password) {
                      await Clipboard.setStringAsync(vault.password);
                    }
                  }}
                >
                  <Text style={{ color: theme.colors.primary }}>
                    Copy
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        ) : null}

        {/* {vault.password ? (
          <View style={{ marginBottom: theme.spacing.md }}>
            <Text variant="muted">Password</Text>

            <View
              style={{
                marginTop: 4,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ flex: 1 }} numberOfLines={1}>
                {showPassword ? vault.password : "••••••••••••"}
              </Text>

              <Pressable
                onPress={() => setShowPassword(!showPassword)}
                style={{ marginLeft: 12 }}
              >
                <Text style={{ color: theme.colors.primary }}>
                  {showPassword ? "Hide" : "Show"}
                </Text>
              </Pressable>
            </View>
          </View>
        ) : null} */}
      </Card>

      <Card>
        <Text
          variant="subtitle"
          style={{
            marginBottom:
              theme.spacing.md,
          }}
        >
          Attachments
        </Text>

        <AttachmentUploadButton
          vaultId={vault.id}
        />

        <View
          style={{
            height:
              theme.spacing.md,
          }}
        />

        <AttachmentList
          vaultId={vault.id}
        />
      </Card>

      {vault.notes ? (
        <Card>
          <Text variant="subtitle">Notes</Text>

          <Text style={{ marginTop: theme.spacing.sm }}>
            {vault.notes}
          </Text>
        </Card>
      ) : null}
    </View>
  );
}

