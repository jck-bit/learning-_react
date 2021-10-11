const DUMMYDATA= [
  {
    id: 'm1',
    title: 'this is a first meetup',
    image: 'https://en.wikipedia.org/wiki/File:Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG',
    address: 'meetup street 5, 1234 meet city',
    description: 'This is a first meetup'
  },
  {
      id: 'm2',
      title: 'this is a second meetup',
      image: 'https://en.wikipedia.org/wiki/File:Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG',
      address: 'meetup street 5, 1234 meet city',
      description: 'This is a first meetup'
    }

];

function AllmeetupsPage() {
    return (
       <section>
         <h1>All meetups</h1>
         {DUMMYDATA.map((meetup)=>{
          return<li key={meetup.id}>{meetup.title}</li> 
         })}
       </section>
    )
}

export default AllmeetupsPage
