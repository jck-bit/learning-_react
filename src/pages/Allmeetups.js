import MeetupList from "../components/meetups/MeetupList";
const DUMMYDATA= [
  {
    id: 'm1',
    title: 'The First Meetup',
    image: 'https://en.wikipedia.org/wiki/File:Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG',
    address: 'meetup street 5, 1234 meet city',
    description: 'This is a first meetup'
  },
  {
      id: 'm2',
      title: 'The second Meetup',
      image: 'https://en.wikipedia.org/wiki/File:Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG',
      address: 'meetup street 5, 1234 meet city',
      description: 'This is a first meetup'
    }

];

function AllmeetupsPage() {
    return (
       <section>
         <h1>All meetups</h1>
         <MeetupList meetups={DUMMYDATA} />
       </section>
    )
}

export default AllmeetupsPage
