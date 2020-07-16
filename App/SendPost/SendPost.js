import React from "react"
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View,TouchableHighlight  } from "react-native"
import {LoginButton, ShareDialog} from 'react-native-fbsdk';

const FBLoginButton = require('../../Component/FBLoginButton');
export default class SendPost extends React.Component {

	/*static FBshareButton = () => {

		const [shareLinkContent , setShareLinkContent ] = useState({
			// Content Type can be video or picture
			// Picture will work for
			contentType: 'picture',
			// We can change it with service providers website
			photos: [{ 
				imageUrl1: this.state.picOne, 
				imageUrl2: this.state.picTwo, 
				imageUrl3: this.state.picThree, 
				imageUrl4: this.state.picFour, 
			}],
			contentUrl: 'https://www.neowarestudios.com/',
			contentDescription: 'This Job is perfect!',
		  });
	
		  return sharePictureWithShareDialog = () => {
			var tmp = this;
			ShareDialog.canShow(sharePhotoContent)
			  .then((canShow) => {
				if (canShow) {
				  return ShareDialog.show(sharePhotoContent);
				}
			  })
			  .then(
				(result) => {
				  if (result.isCancelled) {
					alert('Share cancelled');
				  } else {
					//We will change it to Thank you or something like this.
					alert('Share success with postId: ' + result.postId);
				  }
				},
				function (error) {
				  alert('Share fail with error: ' + error);
				},
			  );
		  };
		}*/


	

	static navigationOptions = ({ navigation }) => {

		const { params } = this.props.navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}

	constructor(props) {
		super(props)
		/*const FBSDK = require('react-native-fbsdk');
		const {
			ShareApi,
		  } = FBSDK;
		const sharePhotoContent = {
			contentType: 'photo',
			photos: [{ imageUrl: this.props.route.params.picOne, }],
		  };*/
	  
		this.state = {
			//sharePhotoContent: sharePhotoContent,
			templateText : this.props.route.params.templateText,
			picOne : this.props.route.params.picOne,
			picTwo : this.props.route.params.picTwo,
			picThree :this.props.route.params.picThree,
			picFour :this.props.route.params.picFour
		}
	}

	shareLinkWithShareDialog() {
		var tmp = this;
		ShareDialog.canShow(this.state.sharePhotoContent).then(
		  function(canShow) {
			if (canShow) {
			  return ShareDialog.show(tmp.state.sharePhotoContent);
			}
		  }
		).then(
		  function(result) {
			if (result.isCancelled) {
			  alert('Share cancelled');
			} else {
			  alert('Share success with postId: ' + result.postId);
			}
		  },
		  function(error) {
			alert('Share fail with error: ' + error);
		  }
		);
	  }
	


	componentDidMount() {

	}

	onContinueButtonPressed = () => {

		const { navigate } = this.props.navigation
		navigate("UserThankYou")
	}

	render() {

		return <View
				style={styles.viewView}>
				<Text
					style={styles.inputTheClientsPhText}>Input the clients phone number. If your client does not have the app they will be re-directed to download.</Text>
				<View
					style={styles.formInputIconView}>
					<Image
						source={require("./../../assets/images/icon-2.png")}
						style={styles.iconImage}/>
					<TextInput
						keyboardType="phone-pad"
						returnKeyType="done"
						autoCorrect={false}
						placeholder="Clients Phone Number "
						style={styles.textTextInput}/>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
				<TouchableHighlight 
					onPress={this.onContinueButtonPressed()}
					style={styles.continueButtonButton}>
					<FBLoginButton
					pic1 = {this.state.picOne}
					/>
					
				</TouchableHighlight >
				
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "white",
		flex: 1,
	},
	inputTheClientsPhText: {
		color: "rgb(78, 78, 86)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.5,
		backgroundColor: "transparent",
		marginLeft: 24,
		marginRight: 24,
		marginTop: 125,
	},
	formInputIconView: {
		backgroundColor: "white",
		borderRadius: 4,
		borderWidth: 1,
		borderColor: "rgb(155, 155, 155)",
		borderStyle: "solid",
		height: 48,
		marginTop: 40,
		marginLeft: 24,
		marginRight: 22,
		flexDirection: "row",
		alignItems: "center",
	},
	iconImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 24,
		height: 24,
		marginLeft: 9,
	},
	textTextInput: {
		backgroundColor: "transparent",
		padding: 0,
		color: "rgb(78, 78, 86)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		flex: 1,
		height: 19,
		marginLeft: 4,
		marginRight: 17,
	},
	continueButtonButtonText: {
		color: "white",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	continueButtonButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	continueButtonButton: {
		backgroundColor: "rgb(23, 117, 242)",
		borderRadius: 8,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		height: 56,
		marginLeft: 16,
		marginRight: 16,
		marginBottom: 28,
	},
})
