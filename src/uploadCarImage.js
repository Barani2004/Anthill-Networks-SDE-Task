// import { supabase } from "./supabaseClient";

// // Function to upload image and store car data in Supabase
// export const uploadCarData = async (file, carData) => {
//   const imageUrl = await uploadImage(file);

//   if (!imageUrl) {
//     alert("Image upload failed");
//     return null;
//   }

//   const { data, error } = await supabase.from("cars").insert([{ ...carData, image_url: imageUrl }]);

//   if (error) {
//     console.error("Error saving car data:", error);
//     return null;
//   }

//   return data;
// };

import { storage, db } from "./firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

export const uploadCarImage = async (file, carData) => {
  if (!file) return null;

  // Create a unique image name
  const storageRef = ref(storage, `cars/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      null,
      (error) => reject(error),
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

        // Add car details to Firestore
        const carRef = collection(db, "cars");
        await addDoc(carRef, { ...carData, imageUrl: downloadURL });

        resolve(downloadURL);
      }
    );
  });
};

