import { useState } from 'react';
import Card from './Card';
import testData from './test-data.json';
import SearchUser from './SearchUser';
import propTypes from 'prop-types'



export default function CardList(props) {

  // const [pageNumber, setpageNumber ] = useState (0);
  // const PageSize=3;
  // const [profiles, setProfiles] = useState (testData.slice(0,3));

  // const profile = testData;

//   const prevPage = () => {
//     const num=pageNumber-1
//     if (num>=0)
//     {
//     const start = PageSize * num
//     const end = start + PageSize
    
//     console.log("next Page")
//     setpageNumber (num)
//     setProfiles(testData.slice(start,end))
//     }
//   }
//   const nextPage = () => {

//     const num=pageNumber+1
//     if (num< testData.length/PageSize)
//     {
//     const start = PageSize * num
//     const end = start + PageSize
    
//     console.log("next Page")
//     setpageNumber (pageNumber+1)
//     setProfiles(testData.slice(start,end))
//     }
    
//  }

  return (
    <div>
      <h2 >Card List</h2>
{/* 
      <button onClick={prevPage}>Previous</button>
      <button onClick={nextPage}>Next</button>
       */}
      <SearchUser/>

      {props.profiles.map(profile => (
        <Card {...profile} key={profile.id} />
      ))
    }
    </div>
  )
}
