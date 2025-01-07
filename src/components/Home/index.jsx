import React, { useState, useEffect } from 'react';
import profilePic from '../../assets/profileImage.avif'
import myData from '../../Data/myData';
import './home.css'
import { SocialIcon } from 'react-social-icons'

export default function Home() {
    const words = ['Developer.', 'Coder.'];
    const [wordIndex, setWordIndex] = useState(0);

    const [text, setText] = useState('');

    const [isDeleting, setIsDeleting] = useState(false);
    function type() {

        // Current word

        const currentWord = words[wordIndex];

        // Determine the function to be performed

        const shouldDelete = isDeleting ? 1 : -1;

        // Create the new text

        setText(current => currentWord.substring(0, current.length - shouldDelete));

        // Determine if this word is complete

        if (!isDeleting && text === currentWord) {

            // Make a pause at the end

            setTimeout(() => setIsDeleting(true), 500);

        } else if (isDeleting && text === '') {

            setIsDeleting(false);

            // Move to the next word

            setWordIndex((current) => (current + 1) % words.length);

        }

    }
    useEffect(() => {

        const timer = setTimeout(type, isDeleting ? 100 : 200);

        // Cleanup function to clear the timeout

        return () => clearTimeout(timer);

    }, [wordIndex, isDeleting, text]);
    return (
        <section id='home'>
            <div className='px-5'>
                <div className='profile'>
                    <div className='profilePic'>
                        <img src={profilePic} alt='Lucky Goyal Profile Picture' width={200} height={200} />
                    </div>
                    <div className='userDetails'>
                        <h1>Hi, I'm {myData.name} a {text}</h1>
                        <p>{myData.description}</p>
                    </div>

                </div>
                <div className='social-media'>
                    <h2>Connect with me</h2>
                    <div className='media'>
                        {
                            myData.media.map((item, index) => {
                                return (
                                    <SocialIcon url={item.link} className={item.name} />

                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}

