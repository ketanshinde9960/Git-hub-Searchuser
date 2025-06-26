
import './Card.css'

// //STEP1
// export default function Card() {
//   return (
//     <div className='profile-list'>

//       <h3>Card 1</h3>
//       <img src={testData.avatar_url} alt={testData.login}/>


//       <div className='profile-data'>
//         <h4>{testData.login}</h4>
//         <a href={testData.html_url}>View Data</a>
//       </div>


//     </div>
//   )
// }


//STEP2
export default function Card(props) {
    // const progile_data=props.profiles

    const progile_data=props    //destructuring
    return (
      <div className='profile-list'>
  
        {/* <h3>Card 1</h3> */}
        <img src={progile_data.avatar_url} alt={progile_data.login}/>
  
  
        <div className='profile-data'>
          <h4>Name : {progile_data.login}</h4>
          <h4>ID : {progile_data.id}</h4>
          <a href={progile_data.html_url}>View Data</a>
          {/* <a href={progile_data.followers_url}>followers</a> */}
          
        </div>
  
  
      </div>
    )
  }