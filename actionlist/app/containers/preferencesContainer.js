import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';
import Header from '../components/header';
import PreferencesButtons from '../components/preferencesButtons';
import Dropdown from '../components/dropdown';
import { Colors, documentStatuses } from '../lib/commons';

const styles = StyleSheet.create({
  componentContainer: {
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    padding: 10,
    alignItems: 'center',
  },
  text: {
    color: Colors.iuCrimson,
    marginLeft: 10,
  },
  container: {
    backgroundColor: Colors.iuDarkLimeStone,
    padding: 10,
  },
  preferencesContainer: {
    marginTop: 10,
    backgroundColor: Colors.iuLimeStone,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  preferenceSelect: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 13,
    marginLeft: 20,
    marginRight: 10,
    marginTop: 12,
  },
  preferenceText: {
    fontSize: 20,
    color: Colors.iuCrimsonDark,
  },
  actionButton: {
    fontSize: 15,
    color: Colors.white,
  },

});

const renderStatus = ({ documentStatus, i }) => (
  <View key={i} style={styles.preferenceSelect}>
    <View>
      <Text style={styles.text}>{documentStatus}</Text>
    </View>
    <View>
      <Dropdown option={documentStatus} />
    </View>
  </View>
);

const PreferencesContainer = () => (
  <ScrollView>
    <View>
      <Header displayMenu={false} />
      <View style={styles.componentContainer}>
        <Text style={styles.preferenceText}>Preferences</Text>
      </View>
      <View style={styles.container}>{
        documentStatuses.map((documentStatus, i) => renderStatus({ documentStatus, i }))
      }
      </View>
      <PreferencesButtons />
    </View>
  </ScrollView>
);

renderStatus.propTypes = {
  documentStatus: React.PropTypes.string.isRequired,
  i: React.PropTypes.number.isRequired,
};

export default PreferencesContainer;
