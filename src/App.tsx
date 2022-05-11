import React, { useEffect, useState } from 'react';
import './App.css';
import { Comments, Posts } from './interface'



function App() {
  const [posts, setPosts] = useState<Posts>();
  const [comments, setComments] = useState<Comments>();

  const [showComentsFor, setShowComentsFor] = useState<number>(0)

  const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const json = await res.json();
    setPosts(json);
  }

  useEffect(() => {

    fetchPosts();
  })
    const fetchComments  = async (id: number) => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id + '/comments')
      const json = await res.json();
      setComments(json);
    }
   
  const onClick = (id: number) => {
    fetchComments(id)
    setShowComentsFor(id)
  };

  const seeAll = () => {
    //TODO: implement
  };

  const seeAllComments = () => {
  //TODO: implement
  };

  return (
    <div className="App">
      <div style={{
        backgroundColor: 'blue',
        color: 'white',
        fontSize: '24px',
        padding: '25px'
      }}>
        Posts
      </div>
      <div>
        {posts?.map(x => <div onClick={() => onClick(x.id)} style={{margin: '10px'}}>
          <div style={{margin: '5px', fontSize: '16px'}}>{x.title}</div>
          <div style={{margin: '5px', fontSize: '12px'}}>{x.body}</div>
          {showComentsFor === x.id && <div>
            <div style={{fontSize: '16px', margin: '10px'}}>Comments</div>
            <div>
              {comments?.map(x => <div style={{margin: '5px', backgroundColor: 'lightblue'}}>
                <div style={{margin: '5px', fontSize: '14px'}}>{x.name}</div>
                <div style={{margin: '5px', fontSize: '12px'}}>{x.body}</div>
                <div style={{margin: '5px', fontSize: '14px'}}>{x.email}</div>
              </div>).slice(0, 1)}
              <button onClick={seeAllComments}>See all</button>
            </div>
          </div>}
        </div>).slice(0, 10)}
        <button onClick={seeAll}>See all</button>
      </div>
    </div>
  );
}

export default App;
