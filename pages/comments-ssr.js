export default function comments(props) {
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
              props.comments?.map(comments => (
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

export async function getServerSideProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments');      
    const comments = await res.json();

    return {
        props:{comments}
    }
}