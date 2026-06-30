// src/app/auth/index.tsx


import { useRouter } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, View } from "react-native";

import Screen from "@/components/layout/Screen";
import Button from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import Text from "@/components/ui/Text";

import { useAuthStore } from "@/features/auth/auth.store";
import { useTheme } from "@/theme/useTheme";

export default function AuthEntry() {
  const router = useRouter();
  const theme = useTheme();

  const { checkOnboarding, setEmail } = useAuthStore();

  const [email, setEmailInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleContinue = async () => {
    const cleanEmail = email.trim();
    if (!cleanEmail) return;

    try {
      setLoading(true);

      setEmail(cleanEmail);

      const res = await checkOnboarding(cleanEmail);
      const status = res?.data?.status;

      switch (status) {
        case "PENDING_VERIFICATION":
          router.push("/auth/login");
          break;

        case "CREATE_PASSWORD":
          router.push("/auth/create-password");
          break;

        case "LOGIN":
        default:
          router.push("/auth/login");
          break;
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Screen>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            paddingHorizontal: theme.spacing.md,
          }}
        >
          {/* HEADER */}
          <View style={{ marginBottom: theme.spacing.lg }}>
            <Text variant="title">Welcome to Vault</Text>

            <Text
              variant="muted"
              style={{ marginTop: theme.spacing.sm }}
            >
              Enter your email to continue. We’ll determine your access flow
              automatically.
            </Text>
          </View>

          {/* CARD */}
          <Card
            style={{
              gap: theme.spacing.md,
            }}
          >
            <Input
              placeholder="you@example.com"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              autoComplete="email"
              value={email}
              onChangeText={setEmailInput}
              returnKeyType="done"
              onSubmitEditing={handleContinue}
            />

            <Button
              title="Continue"
              onPress={handleContinue}
              loading={loading}
              disabled={!email.trim()}
            />
          </Card>

          {/* FOOTER */}
          <Text
            variant="caption"
            style={{
              marginTop: theme.spacing.lg,
              textAlign: "center",
            }}
          >
            Secure document management for professionals
          </Text>
        </View>
      </KeyboardAvoidingView>
    </Screen>
  );
}





// import { useState } from "react";
// import {
//   KeyboardAvoidingView,
//   Platform,
//   StyleSheet,
//   View,
// } from "react-native";
// import { useRouter } from "expo-router";

// import  Screen  from "@/components/layout/Screen";
// import  Button  from "@/components/ui/Button";
// import { Card } from "@/components/ui/Card";
// import { Input } from "@/components/ui/Input";
// import  Text  from "@/components/ui/Text";

// import { useTheme } from "@/theme/useTheme";
// import { useAuthStore } from "@/features/auth/auth.store";

// export default function AuthEntry() {
//   const router = useRouter();
//   const theme = useTheme();

//   const { checkOnboarding, setEmail } = useAuthStore();

//   const [email, setEmailInput] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleContinue = async () => {
//     if (!email.trim()) return;

//     try {
//       setLoading(true);

//       setEmail(email.trim());

//       const res = await checkOnboarding(email.trim());

//       const status = res?.data?.status;

//       console.log("Onboarding Status:", status);

//       switch (status) {
//         case "PENDING_VERIFICATION":
//           router.push("/auth/login");
//           break;

//         case "CREATE_PASSWORD":
//           router.push("/auth/create-password");
//           break;

//         case "LOGIN":
//           router.push("/auth/login");
//           break;
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Screen
//       scroll
//       keyboardShouldPersistTaps="handled"
//     >
//       <KeyboardAvoidingView
//         behavior={
//           Platform.OS === "ios"
//             ? "padding"
//             : undefined
//         }
//         style={styles.flex}
//       >
//         <View
//           style={[
//             styles.container,
//             {
//               paddingHorizontal:
//                 theme.spacing.xl,
//             },
//           ]}
//         >
//           <View style={styles.header}>
//             <Text variant="h1">
//               Welcome to Vault
//             </Text>

//             <Text
//               variant="body"
//               color="secondary"
//               style={styles.subtitle}
//             >
//               Enter your email to continue.
//               We'll determine whether you
//               need to verify your account,
//               create a password, or sign in.
//             </Text>
//           </View>

//           <Card style={styles.card}>
//             <Input
//               label="Email Address"
//               placeholder="you@example.com"
//               keyboardType="email-address"
//               autoCapitalize="none"
//               autoCorrect={false}
//               autoComplete="email"
//               value={email}
//               onChangeText={setEmailInput}
//               returnKeyType="done"
//               onSubmitEditing={handleContinue}
//             />

//             <Button
//               title="Continue"
//               onPress={handleContinue}
//               loading={loading}
//               disabled={!email.trim()}
//               style={styles.button}
//             />
//           </Card>

//           <Text
//             variant="caption"
//             color="secondary"
//             style={styles.footer}
//           >
//             Secure document management,
//             built for professionals.
//           </Text>
//         </View>
//       </KeyboardAvoidingView>
//     </Screen>
//   );
// }

// const styles = StyleSheet.create({
//   flex: {
//     flex: 1,
//   },

//   container: {
//     flex: 1,
//     justifyContent: "center",
//   },

//   header: {
//     marginBottom: 32,
//   },

//   subtitle: {
//     marginTop: 10,
//     lineHeight: 22,
//   },

//   card: {
//     gap: 20,
//     padding: 24,
//   },

//   button: {
//     marginTop: 8,
//   },

//   footer: {
//     textAlign: "center",
//     marginTop: 32,
//   },
// });












// src/app/auth/index.tsx



// import { useAuthStore } from "@/features/auth/auth.store";
// import { useRouter } from "expo-router";
// import { useState } from "react";
// import { Button, Text, TextInput, View } from "react-native";

// export default function AuthEntry() {
//   const router = useRouter();
//   const { checkOnboarding, setEmail } = useAuthStore();

//   const [email, setEmailInput] = useState("");

//   const handleContinue = async () => {
//     setEmail(email);

//     const res = await checkOnboarding(email);

//     const status = res?.data?.status;

//     console.log(
//       "Onboarding Status:",
//       status
//     );

//     if (status === "PENDING_VERIFICATION") {
//       router.push("/auth/login"); // temporary placeholder
//     }

//     if (status === "CREATE_PASSWORD") {
//       router.push("/auth/create-password");
//     }

//     if (status === "LOGIN") {
//       router.push("/auth/login");
//     }
//   };

//   return (
//     <View style={{ padding: 20 }}>
//       <Text>Email</Text>

//       <TextInput
//         value={email}
//         onChangeText={setEmailInput}
//         placeholder="Enter email"
//         style={{
//           borderWidth: 1,
//           padding: 12,
//           marginTop: 10,
//         }}
//       />

//       <Button title="Continue" onPress={handleContinue} />
//     </View>
//   );
// }