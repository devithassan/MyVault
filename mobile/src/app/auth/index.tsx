import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function AuthScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Auth Screen</Text>

      <Button
        title="Go to Login"
        onPress={() => router.push("/auth/login")}
      />
    </View>
  );
}