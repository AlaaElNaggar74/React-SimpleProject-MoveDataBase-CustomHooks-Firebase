import { useState, useEffect } from "react";
import { db } from "../FireBase-Config/Firebase-Connect";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

export let useStateValue = () => {
  let [moveList, setMoveList] = useState([]);
  let collectionClone = collection(db, "Move");

  let fetchData = async () => {
    try {
      let data = await getDocs(collectionClone);
      let fillterDtat = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setMoveList(fillterDtat);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  let addFunc = async ({
    moveTitle,
    moveRele,
    moveDate,
    moveHou,
    moveAMPM,
    moveFeedB,
  }) => {
    try {
      await addDoc(collectionClone, {
        title: moveTitle,
        release: moveRele,
        date: moveDate,
        houre: moveHou,
        time: moveAMPM,
        feedback: moveFeedB,
      });
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };
  let deleFunc = async (id) => {
    let keyDelete = doc(db, "Move", id);
    try {
      await deleteDoc(keyDelete);
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };
  let upddFunc = async (id, tit, rel, date, hou, am, feed) => {
    let keyclon = doc(db, "Move", id);

    try {
      await updateDoc(keyclon, {
        title: tit,
        release: rel,
        date: date,
        houre: hou,
        time: am,
        feedback: feed,
      });
    } catch (err) {
      console.error(err);
    }
  };
  return { moveList, addFunc, deleFunc, upddFunc };
};
