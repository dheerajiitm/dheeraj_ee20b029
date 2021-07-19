import React from 'react'
import Card from './card.jsx'


var props=[{
    placeName:"Taj Mahal",
    description:("At the brink of dawn when the first rays of the sun hits the dome of this epic monument, it radiates like a heavenly abode, cloaked in bright golden. And then at dusk, basking in the glory of moon, it shines like a perfectly carved diamond; appearing as if straight owwut of some magical tale, leaving the viewers awestruck by its sense of grandeur. Nothing short of an architectural marvel, no wonder it stands proud at being one of the Seven Wonders of the World. An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife, the Taj Mahal is the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage".substring(300)),
    src:"https://images.unsplash.com/photo-1548013146-72479768bada?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80",
  },
  {
    placeName:"Colloseum",
    description: ("Colosseum, also called Flavian Amphitheatre, giant amphitheatre built in Rome under the Flavian emperors. Construction of the Colosseum was begun sometime between 70 and 72 CE during the reign of Vespasian. It is located just east of the Palatine Hill, on the grounds of what was Nero’s Golden House. The artificial lake that was the centrepiece of that palace complex was drained, and the Colosseum was sited there, a decision that was as much symbolic as it was practical. Vespasian, whose path to the throne had relatively humble beginnings, chose to replace the tyrannical emperor’s private lake with a public amphitheatre that could host tens of thousands of Romans.".substring(300)),
    src:"https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=686&q=80",
  },  
  {
    placeName:"Machu Picchu",
    description: ("Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley. Built in the 15th century and later abandoned, it’s renowned for its sophisticated dry-stone walls that fuse huge blocks without the use of mortar, intriguing buildings that play on astronomical alignments and panoramic views. Its exact former use remains a mystery. The approximately 200 structures making up this outstanding religious, ceremonial, astronomical and agricultural centre are set on a steep ridge, crisscrossed by stone terraces. Following a rigorous plan the city is divided into a lower and upper part, separating the farming from residential areas, with a large square between the two.".substring(300)),
    src:"https://images.unsplash.com/photo-1571492913849-fdc97148242d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80",
  },
  {
    placeName:"Petra",
    description: ("Petra was established in 312 AC, and it became the capital of the Nabateans people, who were referred to in the Bible. They inhabited the region of Petra between the IV AC and II DC. Petra was also a very important commercial center between the Arabic peninsula and Damascus in Syria, and today Petra is the most visited tourist attraction in Jordan.In the 12th century, Petra was once again taken by different leaders and for a while, Petra was hidden until it was found by Swiss explores Johann Ludwig Burckhardt, who was responsible to announce the city into the world with his poem “a rose-red city half as old as time.".substring(300)),
    src:"https://images.unsplash.com/photo-1615811648503-479d06197ff3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80",
  }]

  function places(){
        return(
            <div>
            {props.map( function places(i){ return(<Card placeName={i.placeName} description={i.description} src={i.src} ></Card>)})}
            </div>)
  }

  export default places;