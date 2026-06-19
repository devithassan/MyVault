
// src/features/vault/components/VaultForm.tsx

// production level
import { useState } from "react";
import { View } from "react-native";

import Button from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Text from "@/components/ui/Text";

import { useTheme } from "@/theme/useTheme";

import { Vault, VaultCategory } from "../vault.types";
import { VaultCategoryPicker } from "./VaultCategoryPicker";

type Props = {
  loading?: boolean;
  initialValues?: Partial<Vault>;
  submitLabel?: string;

  onSubmit: (data: {
    title: string;
    category: VaultCategory;
    username?: string;
    email?: string;
    password?: string;
    website?: string;
    notes?: string;
  }) => void;
};

export function VaultForm({
  loading = false,
  initialValues,
  submitLabel = "Create Vault",
  onSubmit,
}: Props) {
  const theme = useTheme();

  const [title, setTitle] =
    useState(initialValues?.title ?? "");

  const [category, setCategory] =
    useState<VaultCategory>(
      initialValues?.category ?? "login"
    );

  const [username, setUsername] =
    useState(initialValues?.username ?? "");

  const [email, setEmail] =
    useState(initialValues?.email ?? "");

  const [password, setPassword] =
    useState(initialValues?.password ?? "");

  const [website, setWebsite] =
    useState(initialValues?.website ?? "");

  const [notes, setNotes] =
    useState(initialValues?.notes ?? "");

  

  const handleSubmit = () => {
    if (!title.trim()) return;

    onSubmit({
      title,
      category,
      username,
      email,
      password,
      website,
      notes,
    });
  };

  return (
    <View
      style={{
        gap: theme.spacing.md,
      }}
    >
      <Input
        placeholder="Vault Title"
        value={title}
        onChangeText={setTitle}
      />

      <View
        style={{
          gap: theme.spacing.sm,
        }}
      >
        <Text variant="subtitle">
          Category
        </Text>

        <VaultCategoryPicker
          value={category}
          onChange={setCategory}
        />
      </View>

      <Input
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Input
        placeholder="Website"
        value={website}
        onChangeText={setWebsite}
      />

      <Input
        placeholder="Notes"
        value={notes}
        onChangeText={setNotes}
      />


      {/* <Button
        title="Create Vault"
        loading={loading}
        onPress={handleSubmit}
      /> */}

      <Button
        title={submitLabel}
        loading={loading}
        onPress={handleSubmit}
      />
    </View>
  );
}







// dev level
// import { useState } from "react";
// import { View } from "react-native";

// import Button from "@/components/ui/Button";
// import { Input } from "@/components/ui/Input";

// import { useTheme } from "@/theme/useTheme";
// import { VaultCategory } from "../vault.types";

// type Props = {
//   loading?: boolean;
//   onSubmit: (data: {
//     title: string;
//     category: VaultCategory;
//     username?: string;
//     email?: string;
//     password?: string;
//     website?: string;
//     notes?: string;
//   }) => void;
// };

// export function VaultForm({
//   loading = false,
//   onSubmit,
// }: Props) {
//   const theme = useTheme();

//   const [title, setTitle] = useState("");
//   const [category, setCategory] =
//     useState<VaultCategory>("login");

//   const [username, setUsername] =
//     useState("");

//   const [email, setEmail] =
//     useState("");

//   const [password, setPassword] =
//     useState("");

//   const [website, setWebsite] =
//     useState("");

//   const [notes, setNotes] =
//     useState("");

//   return (
//     <View
//       style={{
//         gap: theme.spacing.md,
//       }}
//     >
//       <Input
//         placeholder="Title"
//         value={title}
//         onChangeText={setTitle}
//       />

//       <Input
//         placeholder="Category (login, bank, card...)"
//         value={category}
//         onChangeText={(value) =>
//           setCategory(
//             value as VaultCategory
//           )
//         }
//       />

//       <Input
//         placeholder="Username"
//         value={username}
//         onChangeText={setUsername}
//       />

//       <Input
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />

//       <Input
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />

//       <Input
//         placeholder="Website"
//         value={website}
//         onChangeText={setWebsite}
//       />

//       <Input
//         placeholder="Notes"
//         value={notes}
//         onChangeText={setNotes}
//       />

//       <Button
//         title={
//           loading
//             ? "Creating..."
//             : "Create Vault"
//         }
//         onPress={() =>
//           onSubmit({
//             title,
//             category,
//             username,
//             email,
//             password,
//             website,
//             notes,
//           })
//         }
//       />
//     </View>
//   );
// }