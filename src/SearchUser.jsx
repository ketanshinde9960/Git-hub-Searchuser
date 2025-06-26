import { useState } from "react";
// import { useRef } from "react";
//accsesing input elements using useRef hooks
// const SearchUser = () => {
//     const username = useRef()

//     const handleSubmit=(event)=>{
//         console.log("form submitted")
//         event.preventDefault();
//         console.log(username.current.value);

        
//     }
//   return (
//     <div>

//     <form onSubmit={handleSubmit}>

//         <input type='text' ref={username}></input>
//         <button>search user</button>
//     </form>
      
//     </div>
//   )
// }

// export default SearchUser;


//


const SearchUser = ({ onSearch }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form submitted");
    console.log(username);
    onSearch(username); // ✅ Fixed: removed props
  };

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={handleChange}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search User</button>
      </form>
    </div>
  );
};

export default SearchUser;
