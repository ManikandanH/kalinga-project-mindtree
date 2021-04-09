import firebase from 'firebase';

//export const url="http://localhost:3001";
  export const url = "https://bookmyfurniture-wt-dev-server.azurewebsites.net";
// export const url = "https://bookmyfurniture-wt-server.azurewebsites.net";

const fireConfig = {
  apiKey: "AIzaSyCRnhJoC8nJNtdDo8FEzoJY_5XCBFNtG3I",
  authDomain: "book-my-furniture.firebaseapp.com",
  databaseURL: "https://book-my-furniture.firebaseio.com",
  projectId: "book-my-furniture",
  storageBucket: "book-my-furniture.appspot.com",
  messagingSenderId: "930705643738"
};

export const fire = firebase.initializeApp(fireConfig);
export const bed1 = "https://firebasestorage.googleapis.com/v0/b/book-my-furniture.appspot.com/o/bed17.jpg?alt=media&token=5383a6ed-23ce-4f76-b12b-6b1c7ecd0658";
export const bed2 = "https://firebasestorage.googleapis.com/v0/b/book-my-furniture.appspot.com/o/bed20.jpg?alt=media&token=8d20da15-5c6b-44dc-8afb-e2f0d824d129";
export const bed3 = "https://firebasestorage.googleapis.com/v0/b/book-my-furniture.appspot.com/o/bed3.jpg?alt=media&token=5257f383-951e-419a-a72c-373255510d79";
export const bed4 = "https://firebasestorage.googleapis.com/v0/b/book-my-furniture.appspot.com/o/bed4.jpg?alt=media&token=7c02c197-4511-4f43-8e8d-f8f286992feb";
export const chair1 = "https://firebasestorage.googleapis.com/v0/b/book-my-furniture.appspot.com/o/chair1.jpeg?alt=media&token=7662c79e-b1df-4a31-9d25-2447f5a89f8a";
export const chair2 = "https://firebasestorage.googleapis.com/v0/b/book-my-furniture.appspot.com/o/chair2.jpeg?alt=media&token=263f7626-0387-4689-bd1f-a1b3f14eaff8";
export const chair3 = "https://firebasestorage.googleapis.com/v0/b/book-my-furniture.appspot.com/o/rico--recliner-by-durian-rico--recliner-by-durian-pp5oat.jpg?alt=media&token=3fe34746-9b9e-4875-a869-9e44636f5d8e";
export const chair4 = "https://firebasestorage.googleapis.com/v0/b/book-my-furniture.appspot.com/o/chair4.jpg?alt=media&token=2208d6c8-803a-4efd-a425-e0a32a57e07c";
export const dressingtable1 = "https://firebasestorage.googleapis.com/v0/b/book-my-furniture.appspot.com/o/dressingtable2.jpeg?alt=media&token=32a55ae0-0ce6-499c-8cc1-5d1de17a54fa";
export const dressingtable2 = "https://firebasestorage.googleapis.com/v0/b/book-my-furniture.appspot.com/o/dressingtable1.jpeg?alt=media&token=e51d1f5d-5da4-4559-9a0d-f080dc4a7fc6";
export const sofa1 = "https://firebasestorage.googleapis.com/v0/b/book-my-furniture.appspot.com/o/sofa1.jpeg?alt=media&token=a0329942-70e7-4973-a89a-5a4490bfb5ae";
export const sofa2 = "https://firebasestorage.googleapis.com/v0/b/book-my-furniture.appspot.com/o/sofa2.jpeg?alt=media&token=adf6c9a5-c3ec-4e83-83e4-2c5fcd04bf1d";
export const sofa3 = "https://firebasestorage.googleapis.com/v0/b/book-my-furniture.appspot.com/o/Yellow-sofa-and-background-wall-rendering.jpg?alt=media&token=19eb40f1-45ea-416f-916f-5a0000983d4f";
export const table1 = "https://firebasestorage.googleapis.com/v0/b/book-my-furniture.appspot.com/o/table1.jpg?alt=media&token=c2c041ad-cad1-4950-8fd0-5447d8934371";
export const table2 = "https://firebasestorage.googleapis.com/v0/b/book-my-furniture.appspot.com/o/table4.jpg?alt=media&token=44ffe774-d727-4015-a7d3-bb8987f660c1";
export const offer1 = "https://firebasestorage.googleapis.com/v0/b/book-my-furniture.appspot.com/o/offer2.jpg?alt=media&token=8cfc6e55-694b-40a0-8bd5-3612f1823685";
export const offer2 = "https://firebasestorage.googleapis.com/v0/b/book-my-furniture.appspot.com/o/offer5.jpg?alt=media&token=997c919f-df74-42ba-a3c6-19ed1df837b8";
export const offer3 = "https://firebasestorage.googleapis.com/v0/b/book-my-furniture.appspot.com/o/offer6.jpg?alt=media&token=78130a9f-9908-4436-900e-289cd1069326";
export const offer4 = "https://firebasestorage.googleapis.com/v0/b/book-my-furniture.appspot.com/o/offer7.jpg?alt=media&token=74a2ecd3-a3db-43c9-aad3-bd89560b890b";
export const beds = [bed1, bed2];
export const chairs = [chair1, chair2, chair3, chair4];
export const dressingtables = [dressingtable1, dressingtable2];
export const sofas = [sofa1, sofa2];
export const tables = [table1];
  const offers = [offer1, offer2, offer3, offer4];
  export default offers;