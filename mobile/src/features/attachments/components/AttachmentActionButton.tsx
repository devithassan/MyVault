import { View } from "react-native";

type Props = {
  children: React.ReactNode;
};

export function AttachmentThumbnail({
  children,
}: Props) {

  return (

    <View
      style={{
        width: 72,
        height: 72,
        borderRadius: 14,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      {children}

    </View>

  );

}