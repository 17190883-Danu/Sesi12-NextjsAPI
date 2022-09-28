import {useEffect,useState} from 'react'

export default function Home(){  
  const [comments,setcomments] = useState([]);

  useEffect(
    () => {
      fetch('https://jsonplaceholder.typicode.com/comments')      
      .then(res => res.json())      
      .then(data => setcomments(data));
    },
    []
    );

    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
          </tr>
        </thead>
        
        <tbody>
          {
            comments.map(comments => (
              <tr key={comments.id}>
                <td>{comments.id}</td>
                <td>{comments.name}</td>
                <td>{comments.email}</td>
                <td>{comments.body}</td>
              </tr>     
              ))
          }
        </tbody>
      </table>
    );
    }