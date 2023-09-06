import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
export function App () {
    return (
    <>
        <section className='App'>
            <TwitterFollowCard 
                isFollowing 
                userName="milesdavis" 
                >Miles Davis</TwitterFollowCard>
        
            <TwitterFollowCard 

                isFollowing={false} 
                userName="spotify" 
                >Spotify</TwitterFollowCard>
        
            <TwitterFollowCard 
                isFollowing={false}
                userName="batman" 
                >Batman</TwitterFollowCard>
        
            <TwitterFollowCard  
                isFollowing 
                userName="djpain1" 
                >Dj Pain</TwitterFollowCard>
        
            <TwitterFollowCard 
                isFollowing 
                userName="rickbeato" 
                >Rick Beato</TwitterFollowCard>   
        </section>
    </>
    )
}