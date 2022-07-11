import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import * as Yup from "yup";

import {
    AppForm as Form,
    AppFormField as FormField,
    AppFormPicker as Picker,
    SubmitButton,
} from "../components/forms";
import Screen from "../components/commons/Screen";
import CategoryPickerItem from "../components/commons/CategoryPickerItem";
import FormImagePicker from "../components/forms/AppFormImagePicker";
import useLocation from "../hooks/useLocation";
import listingsApi from "../api/listings";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
    {
        backgroundColor: "#fc5c65",
        icon: "floor-lamp",
        label: "Lamps",
        value: 1,
    },
    {
        backgroundColor: "#fd9644",
        icon: "pot",
        label: "Flower Vase",
        value: 2,
    },
    {
        backgroundColor: "#fed330",
        icon: "stool",
        label: "Stools",
        value: 3,
    },
    {
        backgroundColor: "#26de81",
        icon: "wallpaper",
        label: "Wall Decor",
        value: 4,
    },
    {
        backgroundColor: "#2bcbba",
        icon: "basket",
        label: "Baskets",
        value: 5,
    },
    {
        backgroundColor: "#45aaf2",
        icon: "image",
        label: "Arts",
        value: 6,
    },
    {
        backgroundColor: "#778ca3",
        icon: "application",
        label: "Other",
        value: 7,
    },
];

function ListingEditScreen() {

    const location = useLocation();

    const [uploadVisible, setUploadVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleSubmit = async (listing, { resetForm }) => {
        setProgress(0);
        setUploadVisible(true);
        const result = await listingsApi.addListing(
            { ...listing, location },
            (progress) => setProgress(progress)
        );

        if (!result.ok) {
            setUploadVisible(false);
            return alert("Could not save the listing");
        }
        // return alert("Success");
        resetForm();
    };


    return (
        <ScrollView>
            <Screen style={styles.container}>
                <UploadScreen
                    onDone={() => setUploadVisible(false)}
                    progress={progress}
                    visible={uploadVisible}
                />
                <Form
                    initialValues={{
                        title: "",
                        price: "",
                        description: "",
                        category: null,
                        images: [],
                    }}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    <FormImagePicker name="images" />
                    <FormField maxLength={255} name="title" placeholder="Title" />
                    <FormField
                        keyboardType="numeric"
                        maxLength={8}
                        name="price"
                        placeholder="Price"
                        width={120}
                    />
                    <Picker
                        width="50%"
                        items={categories}
                        name="category"
                        PickerItemComponent={CategoryPickerItem}
                        numberOfColumns={3}
                        placeholder="Category" />
                    <FormField
                        maxLength={255}
                        multiline
                        name="description"
                        numberOfLines={3}
                        placeholder="Description"
                    />
                    <SubmitButton title="Post" />
                </Form>
            </Screen>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});
export default ListingEditScreen;