import MeetupList from "../components/meetups/MeetupList";
const DUMMYDATA= [
  {
    id: 'm1',
    title: 'The First Meetup',
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'meetup street 5, 1234 meet city',
    description: 'This is a first meetup'
  },
  {
      id: 'm2',
      title: 'The second Meetup',
      image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
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
