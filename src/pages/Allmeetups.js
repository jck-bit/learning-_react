import { useState,useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";

function AllmeetupsPage() {
  const[isLoading, setIsLoading]= useState(true);
  const[loadedMeetups, setLoadedMeetups] = useState([]);


  useEffect(()=> {

  fetch('https://react-http-e7a9f-default-rtdb.firebaseio.com/meetups.json',

  ).then(response =>{
    return response.json();
  }).then(data=>{
    setIsLoading(false)

  })

  }, []);


  if (isLoading){
    return <section>
      <p>Loading...</p>
    </section>
  }

    return (
       <section>
         <h1>All meetups</h1>
         <MeetupList meetups={loadedMeetups} />
       </section>
    )
}

export default AllmeetupsPage
