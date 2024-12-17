import { useState } from "react";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import SongCard from "./Components/SongCard";

function App(){

  const data = [
    {name:"Divyansh",image:"https://plus.unsplash.com/premium_photo-1673735186578-1a6cd08b8100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym95c3xlbnwwfHwwfHx8MA%3D%3D",profession:"Web Developer",isFriend:false},
    {name:"Manish",image:"https://plus.unsplash.com/premium_photo-1663090146395-93dd7f1e2696?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJveXN8ZW58MHx8MHx8fDA%3D",profession:"Backend Developer",isFriend:false},
    {name:"Sheetal",image:"https://images.unsplash.com/photo-1606814893907-c2e42943c91f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",profession:"UI/UX Designer",isFriend:false},
    {name:"Chintu",image:"https://images.unsplash.com/photo-1564440769611-a105bcd81f1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJveXN8ZW58MHx8MHx8fDA%3D",profession:"Logic Building",isFriend:false},
  ]
  const songs = [
    {
      "image": "https://plus.unsplash.com/premium_photo-1668319914124-57301e0a1850?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
      "song_name": "Blinding Lights",
      "artist_name": "The Weeknd",
      "isAdded" : false
    },
    {
      "image": "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
      "song_name": "Shape of You",
      "artist_name": "Ed Sheeran",
      "isAdded" : false
    },
    {
      "image": "https://images.unsplash.com/photo-1628015081036-0747ec8f077a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
      "song_name": "Levitating",
      "artist_name": "Dua Lipa",
      "isAdded" : false
    },
    {
      "image": "https://images.unsplash.com/photo-1592188657297-c6473609e988?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdpcmx8ZW58MHx8MHx8fDA%3D",
      "song_name": "Rolling in the Deep",
      "artist_name": "Adele",
      "isAdded" : false
    },
    {
      "image": "https://plus.unsplash.com/premium_photo-1668485966810-cbd0f685f58f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGdpcmx8ZW58MHx8MHx8fDA%3D",
      "song_name": "Uptown Funk",
      "artist_name": "Mark Ronson ft. Bruno Mars",
      "isAdded" : false
    },
  ]
  
  const [allData,setAllData] = useState(data);
  const [songsData,setSongsData] = useState(songs);

  const handleChange = (i)=>{
    setAllData((prev)=> prev.map((item,idx)=> idx==i ? {...item,isFriend:!item.isFriend} : item) )
  }

  const addToFavourite = (i)=>{
    setSongsData((prev)=> prev.map((item,idx)=>{
      if(i===idx){
        return {...item,isAdded: !item.isAdded}
      }
      return item;
    }))
  }

  return (
    
    <div>
      <div className="w-full h-screen bg-gray-300 flex gap-3 items-center justify-center">
      {
        allData.map((item,i)=> (
          <Card key={i} item={item} handleChange={handleChange} index={i} />
        ))
      }
      </div>
      <div className="w-full h-screen bg-slate-100 px-20">
        <Navbar data={songsData} />
        <div className="w-full flex gap-8 flex-wrap mt-4">
          {
            songsData.map((item,i)=>(
              <SongCard data={item} key={i} addToFavourite={addToFavourite} index={i} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App;