import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Loader from './Loader';
// import InfiniteScroll from 'react-infinite-scroller';

const Listing = () => {
    const [loadding, setLoading] = useState(false)
    const [userList, setUpdatedList] = useState([]);
    const list = async () => {
        setLoading(true);
        const results = await axios.get('https://jsonplaceholder.typicode.com/todos')
        setUpdatedList(results.data);
        setLoading(false);
        console.log(results.data)
    }
    useEffect(() => {
        list();
    }, []);


    return (
        <div>
            {
                loadding ? <Loader /> :
                    userList.map((user) => {
                        return <div key={user.id}>
                            {
                                user.title.length > 50 ? user.title + '...' : user.title
                            }
                        </div>
                    })
            }
        </div>
    )
}

export default Listing