
import React, { useState } from "react";
import ImagePicker from "react-image-picker";
import "react-image-picker/dist/index.css";
import {Button} from "@mui/material";

// Dynamically import all images from the "covers" directory
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context("/assets/images/covers/cover_", false, /\.(png|jpe?g|svg)$/));

// Create the image list by mapping over the imported images
const imageList = images.map((image, i) => ({ src: image.default, value: i }));

const ImagePic = () => {
    const [image, setImage] = useState(null);

    const onPick = (pickedImage) => {
        setImage(pickedImage);
    };

    return (
        <>
            <ImagePicker images={imageList} onPick={onPick} />
            <Button type="button" onClick={() => console.log(image)}>
                OK
            </Button>
        </>
    );
};

export default ImagePic;

/*
cover: `/assets/images/covers/cover_${setIndex}.jpg`,*/
