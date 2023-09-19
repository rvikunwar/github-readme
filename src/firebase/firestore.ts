import firebaseApp from "./config";
import {
  getFirestore,
  getDocs,
  collection,
} from "firebase/firestore";

const db = getFirestore(firebaseApp);

export default async function getAllDocument(collectionName: string) {
  try {
    const data: any = [];
    const querySnapshot = await getDocs(collection(db, collectionName));
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });

    return data;
  } catch (e) {
    throw e;
  }
}
