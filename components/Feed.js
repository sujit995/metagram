import React from 'react'
import MiniProfile from './MiniProfile'
import Posts from './Posts'
import Stories from './Stories'
import Suggetions from './Suggetions'

const Feed = () => {
    return (
        <main className="grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto">
            <section className="md:col-span-2">
                <Stories />
                <Posts />
            </section>
            <section className="hidden md:inline-grid md:col-span-1">
                <div className="fixed w-[380px]">
                    <MiniProfile />
                    <Suggetions />
                </div>
            </section>
        </main>
    )
}

export default Feed