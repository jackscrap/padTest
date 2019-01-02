import React from "react";
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	ScrollView,
	NestedScrollView
} from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView
				style={{
					flex: 1,
					backgroundColor: "#333"
				}}
			>
				<View
					contentContainerStyle={{
						margin: 26,
						backgroundColor: "green",
						display: "none"
					}}
				>
					<Text
						style={{
							fontSize: 160
						}}
					>
						A
					</Text>

					<View
						style={{
							borderWidth: 26,
							borderBottomColor: "red"
						}}
					>
					</View>
				</View>

				<ScrollView
					contentContainerStyle={{
						flex: 1,
						flexDirection: "row"
					}}
				>
					<ScrollView
						style={{
							backgroundColor: "purple",
							flexGrow: 1
						}}
					>
						<Text
							style={{
								fontSize: 60
							}}
						>
							asdf
						</Text>
						<Text
							style={{
								fontSize: 60
							}}
						>
							asdf
						</Text>
						<Text
							style={{
								fontSize: 60
							}}
						>
							asdf
						</Text>
						<Text
							style={{
								fontSize: 60
							}}
						>
							asdf
						</Text>
						<Text
							style={{
								fontSize: 60
							}}
						>
							asdf
						</Text>
						<Text
							style={{
								fontSize: 60
							}}
						>
							asdf
						</Text>
						<Text
							style={{
								fontSize: 60
							}}
						>
							asdf
						</Text>
						<Text
							style={{
								fontSize: 60
							}}
						>
							asdf
						</Text>
						<Text
							style={{
								fontSize: 60
							}}
						>
							asdf
						</Text>
						<Text
							style={{
								fontSize: 60
							}}
						>
							asdf
						</Text>
						<Text
							style={{
								fontSize: 60
							}}
						>
							asdf
						</Text>
					</ScrollView>

					<ScrollView
						style={{
							width: "60%",
							backgroundColor: "blue"
						}}
					>
						<Text
							style={{
								fontSize: 60
							}}
						>
							asdf
						</Text>
					</ScrollView>
				</ScrollView>
			</SafeAreaView>
    );
  }
}
