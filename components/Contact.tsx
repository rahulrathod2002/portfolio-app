import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Modal, ActivityIndicator } from 'react-native';
import * as emailjs from '@emailjs/react-native';
import { styles as customStyles, colors } from '@/styles';

interface AlertDialogueProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

const AlertDialogue: React.FC<AlertDialogueProps> = ({ message, isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalMessage}>{message}</Text>
          <Pressable onPress={onClose} style={styles.modalButton}>
            <Text style={styles.modalButtonText}>OK</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (name: string, value: string) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
    setAlertMessage('');
  };

  const handleSubmit = () => {
    setLoading(true);

    try {
      emailjs
        .send(
          'service_sxcsjlc',
          'template_6sqyumw',
          {
            from_name: form.name,
            to_name: "Rahul Rathod",
            from_email: form.email,
            to_email: "rahulrathod2002@gmail.com",
            message: form.message,
          },
          {
            publicKey: '2c-QZKQfzxOJDKzuO'
          }
        )
        .then(
          () => {
            setLoading(false);
            setAlertMessage("Thank you. I will get back to you as soon as possible.");
            setShowAlert(true);

            setForm({
              name: '',
              email: '',
              message: '',
            });
          },
          (error) => {
            setLoading(false);
            console.error(error);
            setAlertMessage("Unable to submit your query please contact on +91 9923166116");
            setShowAlert(true);
          }
        );
    } catch (error) {
      setLoading(false);
      console.error(error);
      setAlertMessage("Unable to submit your query please contact on +91 9923166116");
      setShowAlert(true);
    }
  };

  return (
    <View style={[customStyles.padding, styles.container]}>
        <View style={styles.formContainer}>
            <Text style={customStyles.sectionSubText}>Get in touch</Text>
            <Text style={customStyles.sectionHeadText}>Contact.</Text>

            <View style={styles.form}>
                <Text style={styles.label}>Your Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="What's your good name?"
                    placeholderTextColor={colors.secondary}
                    value={form.name}
                    onChangeText={(value) => handleChange('name', value)}
                />
                <Text style={styles.label}>Your email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="What's your web address?"
                    placeholderTextColor={colors.secondary}
                    value={form.email}
                    onChangeText={(value) => handleChange('email', value)}
                    keyboardType="email-address"
                />
                <Text style={styles.label}>Your Message</Text>
                <TextInput
                    style={[styles.input, { height: 150 }]}
                    placeholder="What you want to say?"
                    placeholderTextColor={colors.secondary}
                    value={form.message}
                    onChangeText={(value) => handleChange('message', value)}
                    multiline
                    textAlignVertical="top"
                />

                <Pressable onPress={handleSubmit} style={styles.button}>
                    {loading ? (
                        <ActivityIndicator color={colors.white} />
                    ) : (
                        <Text style={styles.buttonText}>Send</Text>
                    )}
                </Pressable>
            </View>
        </View>
      <AlertDialogue message={alertMessage} isVisible={showAlert} onClose={handleCloseAlert} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 48,
  },
  formContainer: {
    backgroundColor: colors['black-100'],
    borderRadius: 16,
    padding: 32,
  },
  form: {
    marginTop: 48,
    gap: 32,
  },
  label: {
    color: colors.white,
    fontWeight: '500',
    marginBottom: 16,
  },
  input: {
    backgroundColor: colors.tertiary,
    paddingVertical: 16,
    paddingHorizontal: 24,
    color: colors.white,
    borderRadius: 8,
    borderWidth: 0,
  },
  button: {
    backgroundColor: colors.tertiary,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: colors.tertiary,
    padding: 32,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  modalMessage: {
    color: colors.white,
    fontSize: 18,
    marginBottom: 24,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#2f80ed',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  modalButtonText: {
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default Contact;
