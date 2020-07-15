
import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity,TouchableHighlight, View } from "react-native"
import ImagePicker from 'react-native-image-picker';
import uploadImage from './../../assets/images/upload.png'

const uploadImageUri = Image.resolveAssetSource(uploadImage).uri

const options = {
	title: 'Select Picture',
	storageOptions: {
	  skipBackup: true,
	  path: 'images',
	},
  };
  
  /**
   * The first arg is the options object for customization (it can also be null or omitted for default options),
   * The second arg is the callback which sends object: response (more info in the API Reference)
   */





export default class ImageUplaod extends React.Component {

	static navigationOptions = ({ navigation }) => {

		const { params = {} } = navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}

	constructor(props) {
		super(props)
		this.state = {
			avatarSource :{},
			imageOne : uploadImageUri,
			imageTwo : uploadImageUri,
			imageThree :uploadImageUri,
			imagefour :uploadImageUri

		}
	}

	ImageTaker(pictureNumber) {
		ImagePicker.showImagePicker(options, (response) => {
			//console.log('Response = ', response);
		  
			if (response.didCancel) {
			  console.log('User cancelled image picker');
			} else if (response.error) {
			  console.log('ImagePicker Error: ', response.error);
			} else if (response.customButton) {
			  console.log('User tapped custom button: ', response.customButton);
			} else {
				let source = response;
		  
			  	// You can also display the image using data:
				//const source = { uri: 'data:image/jpeg;base64,' + response.data };


			  if (pictureNumber=='image1') {
				this.setState({
					avatarSource: source,
					imageOne: 'data:image/jpeg;base64,' + source.data,
				  });
				  //console.log(this.state.source.path)
				console.log(this.state.imageOne)
				
			  }
			  if (pictureNumber=='image2') {
				this.setState({
					avatarSource: source,
					imageTwo: 'data:image/jpeg;base64,' + source.data,
				  });
				  //console.log(this.state.source.path)
				console.log(this.state.imageTwo)
				
			  }

			  if (pictureNumber=='image3') {
				this.setState({
					avatarSource: source,
					imageThree: 'data:image/jpeg;base64,' + source.data,
				  });
				  //console.log(this.state.source.path)
				console.log(this.state.imageThree)
				
			  }

			  if (pictureNumber=='image4') {
				this.setState({
					avatarSource: source,
					imagefour: 'data:image/jpeg;base64,' + source.data,
				  });
				  //console.log(this.state.source.path)
				console.log(this.state.imagefour)
				
			  }

			}
		  });	
	}


	

	componentDidMount() {
		console.log(this.state.imageOne)
	}

	onGroup5ThreePressed = () => {
		console.log('third image clicked')
		this.ImageTaker('image3');	
	}

	onGroup5Pressed = () => {
		console.log('first image clicked')
		this.ImageTaker('image1');
		//console.log('this.state.imageOne = ' + this.state.imageOne)

		
	}

	onViewPressed = () => {
		console.log('fourth image clicked')
		this.ImageTaker('image4');	
	}

	onGroup5TwoPressed = () => {
		console.log('second image clicked')
		this.ImageTaker('image2');	

	}

	onContinueButtonPressed = () => {


		const { navigate } = this.props.navigation

		navigate('CreationPreview', {
			picOne: this.state.imageOne,
			picTwo: this.state.imageTwo,
			picThree: this.state.imageThree,
			picFour: this.state.imagefour,
		});

	}

	render() {

		return <View
				style={styles.viewView}>
				<View
					style={styles.viewTwoView}>
					<View
						style={styles.viewThreeView}>
						<Text
							style={styles.tapOneOfThe4SloText}>Tap one of the 4 slots below to add new or previously taken photos to your post.     </Text>
						<Image
							source={require("./../../assets/images/path-2-2.png")}
							style={styles.path2Image}/>
						<Text
							style={styles.noteInOrderToEnText}>Note: In order to ensure a quality post, make sure to select images that best represent your work </Text>
					</View>
					<View
						style={styles.viewFourView}>
						<View
							pointerEvents="box-none"
							style={{
								height: 145,
								marginRight: 6,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<TouchableHighlight
								onPress={this.onGroup5Pressed}
								style={styles.group5TwoButton}>
								<Image
									source={{ uri: this.state.imageOne}}
									style={styles.group5TwoButtonImage}/>
							</TouchableHighlight>
							<View
								style={{
									flex: 1,
								}}/>
							<TouchableHighlight
								onPress={this.onGroup5TwoPressed}
								style={styles.group5ThreeButton}>
								<Image
									source={{ uri: this.state.imageTwo}}
									style={styles.group5ThreeButtonImage}/>
							</TouchableHighlight>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								height: 145,
								marginRight: 6,
								marginBottom: 7,
								flexDirection: "row",
								alignItems: "flex-end",
							}}>
							<TouchableHighlight
								onPress={this.onGroup5ThreePressed}
								style={styles.group5Button}>
								<Image
									source={{ uri: this.state.imageThree}}
									style={styles.group5ButtonImage}/>
							</TouchableHighlight>
							<View
								style={{
									flex: 1,
								}}/>
							<TouchableHighlight
								onPress={this.onViewPressed}
								style={styles.viewButton}>
								<Image
									source={{ uri: this.state.imagefour}}
									style={styles.viewButtonImage}/>
							</TouchableHighlight>
						</View>
					</View>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
				<TouchableOpacity
					onPress={this.onContinueButtonPressed}
					style={styles.continueButtonButton}>
					<Text
						style={styles.continueButtonButtonText}>Continue</Text>
				</TouchableOpacity>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "white",
		flex: 1,
		alignItems: "center",
	},
	viewTwoView: {
		backgroundColor: "transparent",
		width: 335,
		height: 440,
		alignItems: "center",
		top: 80,
	},
	viewThreeView: {
		backgroundColor: "transparent",
		width: 324,
		height: 107,
		alignItems: "center",
	},
	tapOneOfThe4SloText: {
		color: "rgb(58, 58, 62)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.5,
		backgroundColor: "transparent",
		width: 329,
		marginTop: 5,
	},
	path2Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 147,
		height: 4,
		marginTop: 10,
	},
	noteInOrderToEnText: {
		color: "rgb(78, 78, 86)",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.44,
		backgroundColor: "transparent",
		width: 307,
		marginTop: 7,
	},
	viewFourView: {
		backgroundColor: "transparent",
		width: 308,
		height: 309,
		marginTop: 24,
	},
	group5TwoButton: {
		backgroundColor: "rgb(244, 244, 246)",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 145,
		height: 145,
	},
	group5TwoButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	group5TwoButtonImage: {
		resizeMode: "contain",
		width: 145,
		height: 145,
	},
	group5ThreeButtonImage: {
		resizeMode: "contain",
		width: 145,
		height: 145,
	},
	group5ThreeButton: {
		backgroundColor: "rgb(244, 244, 246)",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 145,
		height: 145,
	},
	group5ThreeButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	group5Button: {
		backgroundColor: "rgb(244, 244, 246)",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 145,
		height: 145,
	},
	group5ButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	group5ButtonImage: {
		resizeMode: "contain",
		width: 145,
		height: 145,
	},
	viewButton: {
		backgroundColor: "rgb(244, 244, 246)",
		borderRadius: 7,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 145,
		height: 145,
	},
	viewButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	viewButtonImage: {
		resizeMode: "contain",
		width: 145,
		height: 145,	
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
		alignSelf: "stretch",
		height: 56,
		marginLeft: 16,
		marginRight: 16,
		marginBottom: 28,
	},
	continueButtonButtonText: {
		color: "white",
		fontFamily: "SFProDisplay-Regular",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
})

