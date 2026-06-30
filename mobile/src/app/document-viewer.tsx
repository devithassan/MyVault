//src/app/document-viewer.tsx

import { SafeAreaView } from "react-native";

import { WebView } from "react-native-webview";

import { useLocalSearchParams } from "expo-router";

import { useTheme } from "@/theme/useTheme";

export default function DocumentViewer() {
  const theme = useTheme();

  const { url } = useLocalSearchParams<{
    url: string;
  }>();

  if (!url) {
    return null;
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}
    >
      <WebView
        source={{
          uri: url,
        }}
        style={{
          flex: 1,
        }}
        startInLoadingState
        javaScriptEnabled
        domStorageEnabled
      />
    </SafeAreaView>
  );
}








// import { SafeAreaView } from "react-native";

// import { useLocalSearchParams } from "expo-router";

// import Pdf from "react-native-pdf";

// import { useTheme } from "@/theme/useTheme";

// export default function DocumentViewer() {
//   const theme = useTheme();

//   const { url } =
//     useLocalSearchParams<{
//       url: string;
//     }>();

//   return (
//     <SafeAreaView
//       style={{
//         flex: 1,
//         backgroundColor:
//           theme.colors.background,
//       }}
//     >
//       <Pdf
//         source={{
//           uri: url!,
//           cache: true,
//         }}
//         style={{
//           flex: 1,
//         }}
//         enablePaging={false}
//         trustAllCerts={false}
//         enableDoubleTapZoom
//         fitPolicy={2}
//       />
//     </SafeAreaView>
//   );
// }