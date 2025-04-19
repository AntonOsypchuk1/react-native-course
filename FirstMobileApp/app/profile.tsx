import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

export default function ProfileScreen() {
  const [email, setEmail]             = useState('');
  const [password, setPassword]       = useState('');
  const [confirm, setConfirm]         = useState('');
  const [lastName, setLastName]       = useState('');
  const [firstName, setFirstName]     = useState('');

  const onRegister = () => {
    // TODO: validate & submit
    console.log({ email, password, confirm, lastName, firstName });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Реєстрація</Text>

      <Text>Електронна пошта</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />

      <Text>Пароль</Text>
      <TextInput style={styles.input} secureTextEntry value={password} onChangeText={setPassword} />

      <Text>Пароль (ще раз)</Text>
      <TextInput style={styles.input} secureTextEntry value={confirm} onChangeText={setConfirm} />

      <Text>Прізвище</Text>
      <TextInput style={styles.input} value={lastName} onChangeText={setLastName} />

      <Text>Ім'я</Text>
      <TextInput style={styles.input} value={firstName} onChangeText={setFirstName} />

      <View style={styles.button}>
        <Button title="Зареєструватися" onPress={onRegister} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  header:    { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input:     { borderWidth: 1, borderColor: '#ccc', borderRadius: 4, padding: 8, marginBottom: 15 },
  button:    { marginTop: 10 },
});
