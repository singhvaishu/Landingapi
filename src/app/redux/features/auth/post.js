"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const PostPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <div className="flex flex-wrap justify-center bg-blue-400">
            {posts.slice(0, 100).map((post) => (
                <Link key={post.id} href={`/post/${post.id}`}>
                    <div className="max-w-md mx-2 my-4 bg-white p-6 rounded-lg shadow-md cursor-pointer">
                        <div className="bg-blue-100 p-4 rounded-lg"> {/* Add yellow background color */}
                            <h2 className="text-blue-500 font-semibold mb-4 text-2xl hover:text-blue-700">
                                {post.title}
                            </h2>
                            <div className="post-body-container bg-blue-300 p-4 rounded-3xl">
                                <p className="text-gray-800">{post.body}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default PostPage;
