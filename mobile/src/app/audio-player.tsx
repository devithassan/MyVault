import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
    ActivityIndicator,
    Pressable,
    View,
} from "react-native";

import {
    AudioPlayer,
    createAudioPlayer,
} from "expo-audio";

import Screen from "@/components/layout/Screen";
import Text from "@/components/ui/Text";

import { useTheme } from "@/theme/useTheme";

export default function AudioPlayerScreen() {
  const theme = useTheme();

  const { url, title } =
    useLocalSearchParams<{
      url: string;
      title?: string;
    }>();

  const [player, setPlayer] =
    useState<AudioPlayer | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [playing, setPlaying] =
    useState(false);

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        const p =
          createAudioPlayer({
            uri: url!,
          });

        if (!mounted) return;

        setPlayer(p);
        setLoading(false);
      } catch (e) {
        console.error(e);
      }
    }

    load();

    return () => {
      mounted = false;

      player?.remove();
    };
  }, []);

  async function togglePlayback() {
    if (!player) return;

    if (playing) {
      player.pause();
      setPlaying(false);
    } else {
      player.play();
      setPlaying(true);
    }
  }

  return (
    <Screen>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: theme.spacing.lg,
        }}
      >
        <Text
          variant="title"
          style={{
            marginBottom:
              theme.spacing.xl,
            textAlign: "center",
          }}
        >
          {title ?? "Audio"}
        </Text>

        {loading ? (
          <ActivityIndicator />
        ) : (
          <Pressable
            onPress={togglePlayback}
            style={{
              paddingHorizontal: 36,
              paddingVertical: 18,
              backgroundColor:
                theme.colors.primary,
              borderRadius: 16,
            }}
          >
            <Text
              style={{
                color: "#fff",
              }}
            >
              {playing
                ? "Pause"
                : "Play"}
            </Text>
          </Pressable>
        )}
      </View>
    </Screen>
  );
}