import { useHistory } from 'react-router-dom'

import NewMeetupForm from "../components/meetups/NewMeetupForm"

function NewMeetupPage() {
    const history = useHistory();


    function addMeetuoHandler(meetupData) {
        fetch('https://react-http-e7a9f-default-rtdb.firebaseio.com/meetups.json',
        {
            method:'POST',
            body: JSON.stringify(meetupData),
            headers :{
               'content-Type': 'application/json'
            }
        }
        ).then(() =>{
            history.replace('/')
        });
    }
    return (
       <section>
           <h1>Add new meetup</h1>
           <NewMeetupForm  onAddMeetup={addMeetuoHandler}/>
       </section>
    )
}

export default NewMeetupPage
