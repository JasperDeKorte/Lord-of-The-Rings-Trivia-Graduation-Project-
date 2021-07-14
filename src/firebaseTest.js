// import React, { useState, useEffect } from 'react'
// import firebase from './firebase'
//
// export default function FirebaseTest() {
//     const [trivia, setTrivia] = useState([]);
//     const [loading, setLoading] = useState(false);
//
//     const ref = firebase.firestore().collection("lord-of-the-rings-trivia")
//     console.log("Dis de REF waarde: ", ref)
//
//
//     function getData() {
//         setLoading(true)
//         ref.onSnapshot((querySnapshot) => {
//             const items = [];
//             querySnapshot.forEach((doc) => {
//                 items.push(doc.data());
//             })
//             setTrivia(items);
//             setLoading(false);
//         });
//     }
//
//     useEffect(() => {
//         getData();
//     }, [])
//
//     if (loading) {
//         return <h1>Loading...</h1>;
//     }
//
//     // return (
//     //     <h1>Hello World</h1>,
//     //     {trivia.map((trivia) => (
//     //         <div key={trivia.id}>
//     //             {trivia.highscoreSaveData}
//     //         </div>
//     // ))}
//     // )
// }





