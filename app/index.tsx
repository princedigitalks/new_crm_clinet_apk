import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const [companyName, setCompanyName] = useState("");
  const [clientName, setClientName] = useState("");
  const [whatsappNo, setWhatsappNo] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6366f1" />
      <View style={styles.topSection}>
        <Text style={styles.heading}>Mozu Electronics</Text>
        <Text style={styles.subheading}>Complete the form below to add a new client</Text>
      </View>

      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        <View style={styles.formWrapper}>
          <ScrollView 
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Company Name</Text>
            <TextInput
              style={styles.input}
              value={companyName}
              onChangeText={setCompanyName}
              placeholder="e.g., Tech Solutions Pvt Ltd"
              placeholderTextColor="#9ca3af"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Client Name</Text>
            <TextInput
              style={styles.input}
              value={clientName}
              onChangeText={setClientName}
              placeholder="e.g., Rajesh Kumar"
              placeholderTextColor="#9ca3af"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>WhatsApp Number</Text>
            <TextInput
              style={styles.input}
              value={whatsappNo}
              onChangeText={setWhatsappNo}
              placeholder="+91 98765 43210"
              placeholderTextColor="#9ca3af"
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="client@example.com"
              placeholderTextColor="#9ca3af"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Website</Text>
            <TextInput
              style={styles.input}
              value={website}
              onChangeText={setWebsite}
              placeholder="www.example.com"
              placeholderTextColor="#9ca3af"
              keyboardType="url"
              autoCapitalize="none"
            />
          </View>

          <TouchableOpacity style={styles.button} activeOpacity={0.8}>
            <Text style={styles.buttonText}>Save Client</Text>
          </TouchableOpacity>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },
  topSection: {
    backgroundColor: "#6366f1",
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 24,
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  subheading: {
    fontSize: 16,
    color: "#e0e7ff",
  },
  keyboardView: {
    flex: 1,
    backgroundColor: "#6366f1",
  },
  formWrapper: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 0,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 40,
  },
  inputContainer: {
    marginBottom: 14,
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    
    paddingLeft: 14,  
    fontSize: 14,
    color: "#1f2937",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  button: {
    backgroundColor: "#6366f1",
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 12,
    shadowColor: "#6366f1",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
