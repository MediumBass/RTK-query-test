import './App.css';

import PostCard from "./components/PostCard";
import React, {useState} from "react";

import {
    useGetPostsQuery,
} from "./features/apiSlice";


function App() {
    const [page, setPage] = useState(1)
    const {
        data,
        isError,
        isLoading,
        refetch,
    } = useGetPostsQuery(page);

    if (isLoading) {
        return (
            <div className="App">
                <h1>loading, please wait</h1>
                <div className="loader"></div>
            </div>
        );
    }
    if (isError) {
        return (
            <div className="App">
                <h1>Error</h1>
                <h2>Something went wrong</h2>
            </div>
        )
    }
    if (data.length !== 0) {
        return (
            <div className="App">
                {data.map(item => (
                    <PostCard key={item.id} item={item}/>
                ))}
                <h1>{page}</h1>
                <div >
                    <button  className={"button"} disabled={page<=1}
                            onClick={()=>setPage(prev=>(prev-1))} >Previous Page</button>
                    <button  className={"button"}
                             onClick={() => refetch()}>Refetch</button>
                    <button  className={"button"}
                            onClick={()=>setPage(prev=>(prev+1))} >Next Page</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className="App">
                <h1>NO DATA</h1>
                <h2>Please go back to previous page</h2>
                <button  className={"button"}
                         onClick={()=>setPage(prev=>(prev-1))} >Previous Page</button>
            </div>
        )
    }
}

export default App;
