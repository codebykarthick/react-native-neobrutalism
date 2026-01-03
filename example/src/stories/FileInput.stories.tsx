import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { View, Text, StyleSheet, Alert } from 'react-native';

import { FileInput, Button, NeobrutalismThemeProvider } from 'react-native-neobrutalism';

const meta: Meta<typeof FileInput> = {
  title: 'Forms/FileInput',
  component: FileInput,
  decorators: [
    (Story) => (
      <NeobrutalismThemeProvider>
        <View style={{ padding: 20, gap: 16, maxWidth: 400 }}>
          <Story />
        </View>
      </NeobrutalismThemeProvider>
    ),
  ],
  argTypes: {
    placeholder: { control: 'text' },
    value: { control: 'text' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof FileInput>;

// Default
export const Default: Story = {
  args: {
    placeholder: 'No file chosen',
    onPress: () => Alert.alert('File Picker', 'Connect to your file picker library'),
  },
};

// With Selected File
export const WithSelectedFile: Story = {
  args: {
    value: 'document.pdf',
    onPress: () => Alert.alert('File Picker', 'Connect to your file picker library'),
  },
};

// Disabled
export const Disabled: Story = {
  args: {
    placeholder: 'File upload disabled',
    disabled: true,
  },
};

// Error State
export const Error: Story = {
  args: {
    placeholder: 'No file chosen',
    error: true,
    onPress: () => Alert.alert('File Picker', 'Connect to your file picker library'),
  },
};

// Full Width
export const FullWidth: Story = {
  args: {
    placeholder: 'No file chosen',
    fullWidth: true,
    onPress: () => Alert.alert('File Picker', 'Connect to your file picker library'),
  },
};

// With Icon
export const WithIcon: Story = {
  args: {
    placeholder: 'No file chosen',
    icon: <Text>📁</Text>,
    onPress: () => Alert.alert('File Picker', 'Connect to your file picker library'),
  },
};

// With Label
export const WithLabel: Story = {
  render: () => (
    <View style={styles.field}>
      <Text style={styles.label}>Upload Document</Text>
      <FileInput
        placeholder="Choose a PDF file"
        onPress={() => Alert.alert('File Picker', 'Connect to your file picker library')}
      />
    </View>
  ),
};

// Interactive Example
export const Interactive: Story = {
  render: function InteractiveFileInput() {
    const [fileName, setFileName] = useState<string | undefined>();

    const handlePickFile = () => {
      // Simulate file selection
      // In real app, use expo-document-picker or react-native-document-picker
      const mockFiles = ['report.pdf', 'image.png', 'data.xlsx', 'notes.txt'];
      const randomFile = mockFiles[Math.floor(Math.random() * mockFiles.length)];
      setFileName(randomFile);
    };

    const handleClear = () => {
      setFileName(undefined);
    };

    return (
      <View style={{ gap: 12 }}>
        <View style={styles.field}>
          <Text style={styles.label}>Select a file</Text>
          <FileInput
            placeholder="No file chosen"
            value={fileName}
            onPress={handlePickFile}
          />
        </View>
        {fileName && (
          <Button
            label="Clear selection"
            variant="secondary"
            size="small"
            onPress={handleClear}
          />
        )}
        <Text style={styles.hint}>
          Tap "Choose File" to simulate file selection
        </Text>
      </View>
    );
  },
};

// Form with File Upload
export const FormWithFileUpload: Story = {
  render: function FormWithFileUpload() {
    const [fileName, setFileName] = useState<string | undefined>();

    return (
      <View style={{ gap: 16 }}>
        <View style={styles.field}>
          <Text style={styles.label}>Name</Text>
          <View style={styles.textInput}>
            <Text style={styles.placeholder}>John Doe</Text>
          </View>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Resume</Text>
          <FileInput
            placeholder="Upload your resume (PDF)"
            value={fileName}
            onPress={() => setFileName('resume.pdf')}
          />
        </View>
        <Button label="Submit Application" fullWidth />
      </View>
    );
  },
};

// Multiple File Inputs
export const MultipleFileInputs: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <View style={styles.field}>
        <Text style={styles.label}>Profile Picture</Text>
        <FileInput
          placeholder="Choose an image"
          icon={<Text>🖼️</Text>}
          onPress={() => Alert.alert('Image Picker', 'Select an image')}
        />
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Resume</Text>
        <FileInput
          placeholder="Choose a PDF"
          icon={<Text>📄</Text>}
          onPress={() => Alert.alert('Document Picker', 'Select a PDF')}
        />
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Cover Letter</Text>
        <FileInput
          placeholder="Choose a document"
          icon={<Text>📝</Text>}
          onPress={() => Alert.alert('Document Picker', 'Select a document')}
        />
      </View>
    </View>
  ),
};

const styles = StyleSheet.create({
  field: {
    gap: 4,
  },
  label: {
    fontWeight: '500',
    fontSize: 14,
  },
  hint: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  placeholder: {
    color: '#00000080',
  },
});
