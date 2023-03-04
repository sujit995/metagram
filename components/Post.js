import React, { useState, useEffect } from 'react'
import { db } from "../firebase";
import {
    DotsHorizontalIcon,
    HeartIcon,
    ChatIcon,
    BookmarkIcon,
    EmojiHappyIcon,
} from "@heroicons/react/outline";
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    onSnapshot,
    orderBy,
    query,
    serverTimestamp,
    setDoc,
} from "firebase/firestore";
import { useRecoilState } from "recoil";
import { useSession } from 'next-auth/react';
import Moment from 'react-moment';

const Post = ({ id, username, userImg, img, caption }) => {

    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const { data: session } = useSession();

    useEffect(() => {
        const unsubscribe = onSnapshot(
            query(
                collection(db, "posts", id, "comments"),
                orderBy("timestamp", "desc")
            ),
            (snapshot) => {
                setComments(snapshot.docs);
            }
        );
    }, [db, id]);

    async function sendComment(event) {
        event.preventDefault();
        const commentToSend = comment;
        setComment("");
        await addDoc(collection(db, "posts", id, "comments"), {
            comment: commentToSend,
            username: session.user.username,
            userImage: session.user.image,
            timestamp: serverTimestamp(),
        });
    }

    return (
        <div className="bg-white my-7 border rounded-md">
            <div className="flex items-center p-5">
                <img
                    className="h-12 rounded-full object-cover border p-1 mr-3"
                    src={userImg}
                    alt={username}
                />
                <p className="font-bold flex-1">{username}</p>
                <DotsHorizontalIcon className="h-5" />
            </div>
            <img className="object-cover w-full max-h-[450px]" src={img} alt="" />
            {session &&
                (<div className="flex justify-between px-4 pt-4">
                    <div className="flex space-x-4">
                        <HeartIcon className="btn" />
                        <ChatIcon className="btn" />
                    </div>
                    <BookmarkIcon className="btn" />
                </div>
                )}
            <p className="p-5 truncate">
                <span className="font-bold mr-2">{username}</span>
                {caption}
            </p>

            {comments.length > 0 && (
                <div className="mx-10 max-h-24 overflow-y-scroll scrollbar-none">
                    {comments.map((comment) => (
                        <div
                            key={comment.data().id}
                            className="flex items-center space-x-2 mb-2"
                        >
                            <img
                                className="h-7  rounded-full object-cover"
                                src={comment.data().userImage}
                                alt="user-image"
                            />
                            <p className="font-semibold">{comment.data().username}</p>
                            <p className="flex-1 truncate">{comment.data().comment}</p>
                            <Moment fromNow>{comment.data().timestamp?.toDate()}</Moment>
                        </div>
                    ))}
                </div>
            )}


            {session && (
                <form className="flex items-center p-4">
                    <EmojiHappyIcon className="h-7" />
                    <input
                        value={comment}
                        className="border-none flex-1 focus:ring-0"
                        type="text"
                        placeholder="Enter your comment..."
                        onChange={(event) => setComment(event.target.value)}
                    />
                    <button
                        type="submit"
                        className="text-blue-400 font-bold disabled:text-blue-200"
                        disabled={!comment.trim()}
                        onClick={sendComment}
                    >
                        Post
                    </button>
                </form>
            )}
        </div>
    )
}

export default Post