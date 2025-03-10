import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, Modal } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const JanuaryScreen = ({ navigation }) => {
  const [showW4Form, setShowW4Form] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showInfoPanel, setShowInfoPanel] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [allowances, setAllowances] = useState({
    allowance1: '0',
    allowance2: '0',
    allowance3: '0'
  });
  const [financials, setFinancials] = useState({
    grossSalary: 0,
    incomeTax: 0,
    netIncome: 0,
    checkingAccount: 0,
    totalCash: 0
  });

  const selectJob = (salary) => {
    setSelectedJob(salary);
    setShowW4Form(true);
  };

  const calculateNetPay = () => {
    // Add calculation logic here
    setShowResults(true);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Personal Info Panel */}
      <View style={styles.personalInfo}>
        <Text style={styles.heading}>Personal Information</Text>
        <Text style={styles.subheading}>MONTHLY STATEMENT</Text>
        <Text style={styles.subheading}>January</Text>
        <Text>Gross Salary: ${financials.grossSalary}</Text>
        <Text>Income Tax: ${financials.incomeTax}</Text>
        <Text>Net Income: ${financials.netIncome}</Text>
        <Text>Checking Account: ${financials.checkingAccount}</Text>
        <Text style={styles.bold}>Total Cash: ${financials.totalCash}</Text>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        <Image 
          source={{ uri: 'https://i.imgur.com/FnmbOYx.png' }}
          style={styles.headerImage}
        />
        <Text style={styles.title}>Welcome to Knob!</Text>
        <Text style={styles.paragraph}>
          You've landed on Knob. While you're slowly getting used to the atmosphere, 
          you need to quickly find a job. And because Knob's unemployment rate is a 
          low 0.001%, you're offered two jobs right away.
        </Text>

        {/* Job Selection */}
        <View style={styles.jobSelection}>
          <Text style={styles.jobTitle}>Job #1</Text>
          <Text style={styles.bold}>Company: Planetary Oxygen Canning Factory</Text>
          <Text>Position: Canister Assembly Technician</Text>
          <Text>Salary: $18 per hour</Text>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => selectJob(3168)}
          >
            <Text style={styles.buttonText}>I'll Take It</Text>
          </TouchableOpacity>

          <Text style={[styles.jobTitle, styles.marginTop]}>Job #2</Text>
          <Text style={styles.bold}>Knob Hair Piece Harvesting Co.</Text>
          <Text>Position: Harvesting Supervisor</Text>
          <Text>Salary: $12 per hour</Text>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => selectJob(2520)}
          >
            <Text style={styles.buttonText}>I'll Take It</Text>
          </TouchableOpacity>
        </View>

        {/* W4 Form Modal */}
        <Modal
          visible={showW4Form}
          animationType="slide"
          transparent={true}
        >
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Fill Out Your W-4 Form</Text>
            <TouchableOpacity
              style={styles.infoIcon}
              onPress={() => setShowInfoPanel(true)}
            >
              <Text>ⓘ</Text>
            </TouchableOpacity>

            {/* Add Picker components for allowances */}
            {/* Add Calculate button */}
          </View>
        </Modal>

        {/* Info Panel Modal */}
        <Modal
          visible={showInfoPanel}
          animationType="slide"
          transparent={true}
        >
          <View style={styles.modalView}>
            {/* Add W-4 information content */}
          </View>
        </Modal>

        {/* Results Section */}
        {showResults && (
          <View style={styles.results}>
            {/* Add results content */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('February')}
            >
              <Text style={styles.buttonText}>Continue to February</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  personalInfo: {
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  mainContent: {
    padding: 20,
  },
  headerImage: {
    height: 100,
    width: 300,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    marginBottom: 15,
    lineHeight: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  // Add more styles as needed
});

export default JanuaryScreen;