// src/app/image-viewer.tsx

import { useMemo, useState } from "react";
import { ActivityIndicator, View, } from "react-native";

import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";

import Screen from "@/components/layout/Screen";

export default function ImageViewer() {
  const { url } = useLocalSearchParams<{
    url: string;
  }>();

  const [loading, setLoading] = useState(true);

  // Force a fresh request every time this screen opens.
  const imageUrl = useMemo(() => {
    if (!url) return "";

    const separator = url.includes("?") ? "&" : "?";
    return `${url}${separator}t=${Date.now()}`;
  }, [url]);

  console.log("IMAGE URL:", imageUrl);

  return (
    <Screen>
      {loading && (
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          <ActivityIndicator size="large" />
        </View>
      )}

      <Image
        key={imageUrl}
        source={{ uri: imageUrl }}
        style={{ flex: 1 }}
        contentFit="contain"
        cachePolicy="none"
        transition={200}
        allowDownscaling={false}
        onLoadStart={() => {
          console.log("IMAGE LOAD START");
        }}
        onLoad={() => {
          console.log("IMAGE LOADED");
          setLoading(false);
        }}
        onError={(e) => {
          console.log(
            "IMAGE ERROR:",
            JSON.stringify(e, null, 2)
          );
          setLoading(false);
        }}
      />

      {/* <Image
  source={{ uri: imageUrl }}
  style={{ flex: 1 }}
  resizeMode="contain"
  onLoad={() => console.log("RN IMAGE LOADED")}
  onError={(e) =>
    console.log(
      "RN IMAGE ERROR",
      JSON.stringify(e.nativeEvent, null, 2)
    )
  }
/> */}
    </Screen>
  );
}




// //src/app/image-viewer.tsx


// import { Image } from "expo-image";

// import { useLocalSearchParams } from "expo-router";

// import Screen from "@/components/layout/Screen";

// export default function ImageViewer() {
//   const { url } =
//     useLocalSearchParams<{
//       url: string;
//     }>();
//     console.log("IMAGE PARAM:", url);

//   return (
//     <Screen>

//       <Image
//         source={{ uri: url }}

        
//         style={{ flex: 1 }}
//         contentFit="contain"
//         cachePolicy="none"

//         onLoad={() => {
//           console.log("IMAGE LOADED");
//         }}

//         onError={(e) => {
//           console.log(
//             "IMAGE ERROR FULL:",
//             JSON.stringify(e, null, 2)
//           );
//         }}
//       />      
//       {/* <Image
//         source={{
//           uri: url,
//         }}
//         style={{
//           flex: 1,
//         }}
//         contentFit="contain"

//         onLoad={() => console.log("IMAGE LOADED")}
//         onError={(e) =>
//             console.log("IMAGE ERROR", e)
//         }
//       /> */}
//     </Screen>
//   );
// }