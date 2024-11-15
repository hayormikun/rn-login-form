import {
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TextInput,
  Text,
  View,
  Switch,
} from "react-native";
import { useState } from "react";
import { RnForm } from "@/components/RnForm.tsx";

export default function HomeScreen() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false)
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.field}>
        <TextInput
          placeholder="Enter fullname"
          style={styles.input}
          value={name}
          onChangeText={setName}
          // secureTextEntry
          // keyboardType="numeric"
          // autoCapitalize="none"
          // autoCorrect={false}
        />
        <Text style={styles.text}>{name}</Text>
      </View>
      <View style={styles.field}>
        <TextInput
          placeholder="Enter message"
          style={[styles.input, styles.multiline]}
          multiline
          value={message}
          onChangeText={setMessage}
        />
        <Text style={styles.text}>{message}</Text>
      </View>
      <View style={[styles.field, styles.switchWrap]}>
        <Text>Dark mode</Text>
        <Switch value={isDarkMode} trackColor={{false: "#767577", true: "lightblue"}} onValueChange={()=>{
          setIsDarkMode(!isDarkMode)
          }
        }/>
      </View> */}
      <RnForm />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: StatusBar.currentHeight,
  },
  field: {
    marginHorizontal: 16,
  },
  switchWrap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  input: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderColor: "#D3D3D3",
    borderWidth: 1,
    fontSize: 16,
    color: "#333333",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
    marginTop: 5,
  },
  multiline: {
    minHeight: 100,
    textAlignVertical: "top"
  }
});
