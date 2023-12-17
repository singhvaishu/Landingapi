
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const PostDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const [post, setPost] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
                const data = await response.json();
                setPost(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (id) {
            fetchData();
        }
    }, [id]);

    return (
        <div className="bg-blue-400 min-h-screen flex flex-wrap justify-center items-center">

            <div className="max-w-md mx-2 my-4 bg-white p-6 rounded-lg shadow-md cursor-pointer">
                <div className="bg-blue-100 p-4 rounded-lg">
                    <h2 className="text-blue-500 font-semibold mb-4 text-2xl hover:text-blue-700">
                        {post.title}
                    </h2>
                    <div className="post-body-container bg-blue-300 p-4 rounded-3xl">

                        <p className="text-gray-800">{post.body}</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default PostDetail;
