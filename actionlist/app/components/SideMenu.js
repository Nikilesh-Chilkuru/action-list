import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Button from 'react-native-button';

import { createSortDate, lastUpdatedSortDate, sortProcessType, sortActionRequested } from '../actions/action_items';

const style = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#e9e9e9',
    borderBottomWidth: 0.5,
    paddingRight: 10,
  },
  text: {
    color: '#7B1500',
    margin: 10,
    fontFamily: 'BentonSansBold, Arial, sans-serif',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'left',
    borderBottomWidth: 0.5,
  },
});

const SideMenu = () => (
<View style={style.view}>
  <Button style={style.text}>Home</Button>
  <Button style={style.text}>Prefrences</Button>
  <Button style={style.text}>Filter</Button>
		<View style={style.view}>
		  <Text style={style.text}>
			  Sort
			</Text>
			<TouchableHighlight onPress={() => oncreateSortDate()}>
			  <Button style={style.text}>Date Created</Button>
			</TouchableHighlight>
    	<TouchableHighlight onPress={() => onlastUpdatedSortDate()}>
			  <Button style={style.text}>Last Updated</Button>
			</TouchableHighlight>
			<TouchableHighlight onPress={() => onsortProcessType()}>
			  <Button style={style.text}>Process Type</Button>
			</TouchableHighlight>
			<TouchableHighlight onPress={() => onsortActionRequested()}>
			  <Button style={style.text}>Action Requested</Button>
			</TouchableHighlight>
		  </View>
 	</View>
);

const mapDispatchToProps = dispatch => ({
  oncreateSortDate: () => dispatch(createSortDate()),
	onlastUpdatedSortDate: () => dispatch(lastUpdatedSortDate()),
	onsortProcessType: () => dispatch(sortProcessType()),
	onsortActionRequested: () => dispatch(sortActionRequested()),
});

SideMenu.propTypes = {
  oncreateSortDate: React.PropTypes.func.isRequired,
	onlastUpdatedSortDate: React.PropTypes.func.isRequired,
	onsortProcessType: React.PropTypes.func.isRequired,
	onsortActionRequested: React.PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SideMenu);
