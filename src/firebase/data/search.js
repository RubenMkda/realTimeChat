import { db } from "@/config";
import { collection, getDocs, query, where } from "firebase/firestore";

const getUsers = async (username) => {

    const usersRef = collection(db, 'users')
    let usersData = []

    const q = query(
        usersRef,
        where('username', '>=', username)
    )

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        usersData.push(doc.data())
    });

    return usersData
}

export default getUsers