import { View } from "react-native";

import Text from "@/components/ui/Text";

import { useTheme } from "@/theme/useTheme";

type Props = {
  label: string;
};

export function AttachmentBadge({
  label,
}: Props) {

  const theme = useTheme();

  return (

    <View
      style={{
        alignSelf: "flex-start",
        backgroundColor: theme.colors.primary,
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 999,
      }}
    >

      <Text
        variant="caption"
        style={{
          color: "#fff",
        }}
      >
        {label}
      </Text>

    </View>

  );

}