import { db } from "@/config"
import { doc, getDoc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore"

const addingChat = async (friend, user) => {

    const combinedId = user.uid > friend.uid
        ? user.uid + friend.uid
        : friend.uid + user.uid

    try{
        const result = await getDoc(doc(db, "chats", combinedId))

        if(!result.exists()){
            await setDoc(doc(db, "chats", combinedId), { messages: [] });

            await updateDoc(doc(db, 'userChats', user.uid), {
                [combinedId + ".userInfo"]: {
                    uid: friend.uid,
                    username: friend.username,
                    photoURL: friend.photoURL
                },
                [combinedId + ".date"]: serverTimestamp()
            })

            await updateDoc(doc(db, 'userChats', friend.uid), {
                [combinedId + '.userInfo']: {
                    uid: user.uid,
                    username: user.displayName,
                    photoURL: user.photoURL
                },
                [combinedId + ".date"]: serverTimestamp()
            })
            return false
        }
    }
    catch(e){
        alert(e)
        return false
    }
}

export default addingChat