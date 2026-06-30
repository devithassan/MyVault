import { Stack, useLocalSearchParams } from "expo-router";
import { View } from "react-native";

import { VideoView, useVideoPlayer } from "expo-video";

import Screen from "@/components/layout/Screen";

export default function VideoPlayerScreen() {
  const { url } = useLocalSearchParams<{
    url: string;
  }>();

  const player = useVideoPlayer(url ?? "", (player) => {
    player.loop = false;
    player.play();
  });

  return (
    <>
      <Stack.Screen
        options={{
          title: "Video",
        }}
      />

      <Screen>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <VideoView
            player={player}
            style={{
              width: "100%",
              aspectRatio: 16 / 9,
            }}
            allowsFullscreen
            // fullscreenOptions={{
            //     enabled: true,
            //     }}
            allowsPictureInPicture
            nativeControls
          />
        </View>
      </Screen>
    </>
  );
}