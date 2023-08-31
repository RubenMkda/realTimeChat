import firebase_app from "@/config";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth"
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { db, storage } from "@/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { EmptyIconUrl } from "@/app/components/const/const";

const auth = getAuth(firebase_app)

const signUp = async(email, password, username, userIcon) => {

    let result = null, error = null

    const q = query(collection(db, 'users'), where("username", "==", username));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        if(doc.data().username === username){
            error = 'nombre de usuario ya elegido'
        }
    });

    if (error !== null) return { result, error }

    try {
        result = await createUserWithEmailAndPassword(auth, email, password);

        const date = new Date().getTime()
        const storageRef = userIcon !== null ? ref(storage, `/icon/${username + date + userIcon.name}`) : ref(storage, 'emptyIcon.png')

        if(userIcon !== null){
            await uploadBytesResumable(storageRef, ProfileImage).then(() => {
                getDownloadURL(storageRef).then(async (downloadURL) => {
                    try{
                        
                        await updateProfile(result.user, {
                            displayName: username,
                            photoURL: downloadURL
                        })
                        
                        await setDoc(doc(db, "users", result.user.uid), {
                            uid: result.user.uid,
                            username: username,
                            email,
                            photoURL: downloadURL,
                        });
                        
                        await setDoc(doc(db, "userChats", result.user.uid), {})
                        
                    } catch(error){
                        console.error(error)
                    }
                })
            })
        }
        else{
            await updateProfile(result.user, {
                displayName: username,
                photoURL: EmptyIconUrl
            })

            await setDoc(doc(db, "users", result.user.uid), {
                uid: result.user.uid,
                username: username,
                email,
                photoURL: EmptyIconUrl,
            });
            
            await setDoc(doc(db, "userChats", result.user.uid), {})
        }
    } catch (e) {
        error = e;
    }

    return { result, error };
}

export default signUp