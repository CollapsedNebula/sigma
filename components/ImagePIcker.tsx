import React, { useState } from "react";
import { Button, Image, StyleSheet, View } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import { ThemedInput } from "./ThemedInput";

type Props = {
    onImageSelected?: (uri: string) => void;
};

const ImagePicker: React.FC<Props> = ({ onImageSelected }) => {
    const [imageUri, setImageUri] = useState<string | null>(null);
    const [imgInput, setImgInput] = useState("");

    const selectImage = () => {
        launchImageLibrary({ mediaType: "photo" }, (response) => {
            if (response.assets && response.assets.length > 0) {
                const uri = response.assets[0].uri || null;
                setImageUri(uri);
                if (uri && onImageSelected) {
                    onImageSelected(uri);
                }
            }
        });
    };

    return (
        <View style={styles.container}>
            <Button title="사진 선택" onPress={selectImage} />
            {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
            <ThemedInput
                onChangeText={setImgInput}
                value={imgInput}
                placeholder="설명을 입력하세요"
                keyboardType="default"
                style={{ marginTop: 12 }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    image: {
        width: 300,
        height: 300,
        marginTop: 20,
        borderRadius: 10,
    },
});

export default ImagePicker;
