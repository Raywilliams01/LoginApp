import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Permissions from "expo-permissions";

const Home = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      const newPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View></View>;
  }

  if (hasPermission === false) {
    const { container, textStyle } = styles;
    return (
      <View style={[container, { justifyContent: "center" }]}>
        <Text style={textStyle}>
          {"Please go to you setting\n and give camera permission"}
        </Text>
      </View>
    );
  }

  let camera = null;

  takePic = async () => {
    if (camera) {
      let photo = await camera.takePictureAsync({
        onPictureSaved: this.onPhotoSave,
      });
      console.log({ photo });
    }
  };

  onPhotoSave = async (photo) => {
    const { uri } = photo;
    const asset = await MediaLibrary.createAssetAsync(uri);
    console.log({ asset });
  };

  const { container, btnStyle, textStyle } = styles;
  return (
    <View style={container}>
      <Camera
        ref={(ref) => {
          camera = ref;
        }}
        style={{ flex: 1 }}
        type={type}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity style={btnStyle} onPress={() => takePic()}>
            <Text style={textStyle}>Take</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    alignSelf: "center",
    fontSize: 30,
    textAlign: "center",
  },
  btnStyle: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  textStyle: { fontSize: 18, marginBottom: 10, color: "white" },
});

export default Home;
