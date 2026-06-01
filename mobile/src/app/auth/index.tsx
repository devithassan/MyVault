// src/app/auth/index.tsx

import { useAuthStore } from "@/features/auth/auth.store";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function AuthEntry() {
  const router = useRouter();
  const { checkOnboarding, setEmail } = useAuthStore();

  const [email, setEmailInput] = useState("");

  const handleContinue = async () => {
    setEmail(email);

    const res = await checkOnboarding(email);

    const status = res?.data?.status;

    console.log(
      "Onboarding Status:",
      status
    );

    if (status === "PENDING_VERIFICATION") {
      router.push("/auth/login"); // temporary placeholder
    }

    if (status === "CREATE_PASSWORD") {
      router.push("/auth/create-password");
    }

    if (status === "LOGIN") {
      router.push("/auth/login");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Email</Text>

      <TextInput
        value={email}
        onChangeText={setEmailInput}
        placeholder="Enter email"
        style={{
          borderWidth: 1,
          padding: 12,
          marginTop: 10,
        }}
      />

      <Button title="Continue" onPress={handleContinue} />
    </View>
  );
}










// export default function AuthScreen() {
//   const router = useRouter();

//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Auth Screen</Text>

//       <Button
//         title="Go to Login"
//         onPress={() => router.push("/auth/login")}
//       />
//     </View>
//   );
// }