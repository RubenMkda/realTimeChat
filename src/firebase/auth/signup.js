import firebase_app from "@/config";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth"
import { db, storage } from "@/config";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const auth = getAuth(firebase_app)

const signUp = async(email, password, username, userIcon) => {

    let result = null, error = null

    try {
        result = await createUserWithEmailAndPassword(auth, email, password);

        const date = new Date().getTime()
        const storageRef = ref(storage, `/icon/${username + date + userIcon.name}`);

        await uploadBytesResumable(storageRef, userIcon).then(() => {
            getDownloadURL(storageRef).then(async (downloadURL) => {
                try{
                    await updateProfile(result.user, {
                        displayName: username,
                        photoURL: downloadURL
                    })

                    await setDoc(doc(db, "users", result.user.uid), {
                        uid: result.user.uid,
                        username,
                        email,
                        photoURL: downloadURL
                    });

                    await setDoc(doc(db, "userChats", result.user.uid), {})

                } catch(error){
                    console.error(error)
                }
            })
        })
    } catch (e) {
        error = e;
    }

    return { result, error };
}

export default signUp