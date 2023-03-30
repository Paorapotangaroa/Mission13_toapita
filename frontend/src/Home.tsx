import React from 'react'
import JoelHilton from "./JoelHiltonHeadshot (1).jpg"
import PageHeader from './PageHeader'
import "./styles.css"

// Import the image and set it as the background image on the website.
const Home = () => {
  return (
    <>
        <PageHeader pageTitle="Home" pageSubheader="Welcome to the wonderful world of movies"/>
        <div className='container'>
            <div className='col2'></div>
                <div className='col'>
                    <h1 className='text-center text-decoration-underline'>About Us</h1>
                    <p>Welcome to your very own movie database! With this amazing tool at your fingertips, 
                        you can easily access information about your favorite movies, including their category, 
                        title, year of release, director, rating, and whether they need editing.</p>

                    <p>This database is the perfect solution for movie enthusiasts who want to keep track of all 
                        their favorite films in one place. Whether you're a casual moviegoer or a hardcore cinephile,
                        this tool is sure to become your go-to resource for all things movies.</p>

                    <p>With the ability to categorize movies based on genre, release year, and other criteria, you 
                        can quickly and easily find the perfect film for any occasion. Want to watch a romantic comedy from the 90s?
                        Check out our database and voila! You'll have a list of great options to choose from.</p>

                    <p>In addition to helping you organize your movie collection, this database also allows you to see how we rate each film 
                        and mark them as needing editing. This way, you can easily keep track of which movies you want to revisit and which ones 
                        you need to update or clean up.</p>

                    <p>Overall, this movie database is an incredibly useful tool for anyone who loves movies. 
                        It's easy to use and packed with all the features you need to stay on top of your movie collection. 
                        So why wait? Start using it today and take your movie watching experience to the next level!</p>
                </div>
            <div className='col2'></div>
        </div>
    </>
  )
}

export default Home
