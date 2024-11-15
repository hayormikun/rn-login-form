import { Button, Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

type Props = {};

export const RnForm = (props: Props) => {
  const [fullname, setFullname] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    let errors = {fullname: "", password: "",}

    if(!fullname) errors.fullname = "fullname is required";
    if(!password) errors.password = "password is required";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  }

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Form submitted with values:", { fullname, password });
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined} keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0} style={styles.container}>
      <View style={styles.form}>
        <Image source={require("../assets/images/adaptive-icon.png")} style={styles.image} />
        <Text style={styles.label}>Fullname: </Text>
        <TextInput
          style={styles.input}
          placeholder="enter fullname"
          value={fullname}
          onChangeText={setFullname}
        />
        {
          errors.fullname ? <Text style={styles.errorText}>{errors.fullname}</Text> : null
        }
        <Text style={styles.label}>Password: </Text>
        <TextInput
          style={styles.input}
          placeholder="enter password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
         {
          errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null
        }
        <Button title="Login" onPress={handleSubmit} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  form: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: 200,
    height: 400,
    marginBottom: 50,
    alignSelf: "center",
    resizeMode: "contain",
  },
  login: {},
});
