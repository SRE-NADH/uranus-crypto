import { useState } from "react";
import { Header } from "./Components/Header";
import CarouselHeader from "./Components/CarouselHeader";
import VideoCard from "./Components/VideoCard";
import ExploreCard from "./Components/ExploreCard";


export default function App() {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="App">
      <Header />
      <div className="nav-bar">
        <a href="#overview">Overview</a>
        <a href="#explore" >Explore</a>
        <a href='#footer'>Contact</a>
      </div>
      <div className="heading-content">
        <p id="large">In Crypto We Trust, But In Uranus, We Believe!</p>
        <p id="small">
          Welcome to the wild side of crypto - where memes aren't just dreams,
          and astrology isn’t just your daily horoscope.
        </p>
      </div>

      <div className='carousel-container'>
        <CarouselHeader />
      </div>

      <div id="overview">
        <h1>Overview</h1>
        <p>
          Uranus, the ruler of Aquarius, starts 2024 in retrograde, going direct
          on Saturday, January 27, then retrogrades again on Sunday, September
          1. This suggests ongoing evolution in your home life and personal
          growth
        </p>
        <p>
          Uranus champions individuality, social justice, and authenticity.
          During its retrograde, focus on living by your values and perhaps
          engage more actively in humanitarian efforts
        </p>
        <p>
          In 2024, the location of the Sun on the March equinox is in the
          constellation of Pisces but also on the border of Aquarius. So, we are
          slowly moving into a new age, from Pisces to Aquarius.
        </p>
        <p>
          Aquarius is ruled by Uranus, the planet that governs innovation,
          technology, and surprising events. Uranus perfectly mirrors Aquarius'
          distinctive attitude, complementing the nontraditional nature of these
          visionary air signs
        </p>
        {readMore && (
          <p>
            The Brown Paper: It used to be white but then came Uranus. As we all
            know, who controls the memes controls the universe and Uranus is on
            course to get pumped. We want to go deeper than a full moon. So
            don’t pass gas fees on this one or else you’ll miss out on comedy
            gold. Get it? If not, thats great. We need more people not into
            crypto to really get it. So do you get it yet? What light-hearted
            meme tokens are really about? Either way lets bring that light to
            your heart, so this world gets smart. -- We used to have a monetary
            system backed by gold, yet in this digital age it’s truly about that
            comedy gold. It’s how we make you and your friends laugh, and the
            shiniest meme tokens with hearts of gold, help you swallow that
            crypto pill. So swallow whole, with these holy vibes, cause this
            worlds ill. Currency itself is a shared belief system, its value is
            defined based on how we value it. Gold worked great for this until
            1971 when the US decided to stop being limited by a gold reserve. At
            this time, the biggest shit coin was born. Thus, an ultimate source
            of power was formed. The ability to literally print money. And
            around it an oasis of corruption is inevitable. Any instrument so
            powerful, that the greediest people alive all seek it, becomes evil
            lurking who would do anything to protect it. From corruption to
            cabal, this is where the collective idea of an evil mafia came from.
            Collective idea, huh, thats exactly what a meme is after all. And
            this meme is real, except rather than an old-school town mafia, this
            one has the money printer, and thus runs the world. Unlimited
            funding can make most problems go away, and now it gave those with
            the power to do so a reason to print. Because printing money is key
            for war, and safety. Make the world less safe? Start a global
            pandemic? Start proxy wars? A good reason to print money, is a bad
            thing for us. Incentives are kinda like assholes, they get extra
            shitty when they’re not maintained. Bad incentives lead to bad
            actors printing trillions of cents. But right now, we're just making
            sense of it all. This exact understanding was what led the pioneers
            of Bitcoin and its early supporters into action. Led by something
            bigger than money… a cure to the mafia's greatest ally, the printing
            machine, whose side effects are best found if you search up WTF
            happened in 1971, the year we created that bitch. So you may wonder
            the recent rally at hand, well, while a certain bank man fried
            crypto for a bit, the inevitable nature of its existence has
            steamrolled into the hearts, minds, and wallets of the mafia itself.
            There’s been a vibe shift. Bitcoin is the gunshot heard around the
            world. Mafia members grabbed their own share and now with a profit
            incentive pushed gigantic financial institutions into their
            investment. What they may or may not realize, is this greed will
            ultimately be their downfall. Many of the corrupt, are just broken
            souls, so with the chance to repent “if you can’t beat em, join em”
            became self evident. And great, if Bitcoin wins they lose the
            printing power, but does it really have the narrative? The better
            question is to ask, would they have ever let it get this big if it
            did? The horse and carriage started the race, but with Uranus we can
            reach the finish. I'd say its the perfect resistance. Sounds tight,
            right? -- Jokes aside, Uranus represents an astronomical tool to
            make our global mafia's power take a big fat dump. If this video is
            your first time understanding the power of the meme token
            revolution, the first token you’ve seen to actually go deep, a token
            representing cosmic memeing beyond dog coin. Then you get where this
            all flushes out. From here on out, let it be embeded into your
            brain, every time you wipe your ass and see that shit stain. You can
            remember to be grateful for brown paper that helped Uranus become
            the cosmic flute that’s going to ring up the global mafia's source
            of power and take start dumping their control mechanism.
          </p>
        )}

        <span onClick={() => setReadMore(!readMore)}>
          {" "}
          {readMore ? "show less" : "read more.."}
        </span>
      </div>
    
      <div className="video-card-container">
          <VideoCard url={"https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2F3b662448-ca27-45ef-9d17-a4b5027bc5db%2FUntitled.png?table=block&id=bccefaca-50cf-4ba6-8f40-f38c3561b0b5&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=1790&userId=&cache=v2"}  link={"https://www.youtube.com/watch?v=-KJZCYW_pN8"}/>
          <VideoCard url={"https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2F1790eb96-29b6-4fb6-9c90-e7c58c2b19c0%2FUntitled.png?table=block&id=de2220c1-8ccd-426a-9fad-7efe5266ce14&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=1580&userId=&cache=v2"} link={"https://www.youtube.com/clip/Ugkxf5cbkoaHLHBI0NhsEmEL3g7Dy6uwTbBY"}/>
        </div>
     




   
      <div id='explore'>
      <h1>Explore More</h1>
      <div>
         <a href="https://www.dextools.io/app/en/solana/pair-explorer/Cu4Pxu7vh7CFGjMsfZFEhpp9Aj6FA7ciQDsbvs5hEkZK?t=1710767663827">
        <ExploreCard img={"https://seeklogo.com/images/D/dextools-logo-4EDDD2DF98-seeklogo.com.png"} content={"DEXTools"}/>
        </a> 
        <a href="https://goldenmeme.org/"> <ExploreCard img={"https://goldenmeme.org/assets/favicon-zjLhmMiS.png"} content={"The Golden Meme"}/></a>
        <a href="https://coinmarketcap.com/currencies/uranus-sol/"><ExploreCard img={"https://seeklogo.com/images/C/coinmarketcap-logo-064D167A0E-seeklogo.com.png"} content={"Coinmarketcap"}/></a>
      </div>
      </div>

   <div id="footer">
        
   <div className="resources">
        <h2>Resources</h2>
        <a>Effective Vibes</a>
        <a href="https://goldenmeme.org/">Golden Meme</a> 
        <hr/>
      </div>
     
     

     <div className="creater">
      <p>SREENADH K</p>
      <p>sreenadh669@gmail.com</p>
      <hr/>
     </div> 
  
  

      <div className="partners">
      <h2>Partners</h2>
      <a href="https://dia.wiki/">Decentralized Intelligence Agency</a>
      <a href="https://worldvibeweb.org/">World Vibe Web</a>
      <a href="https://www.purplerock.xyz/">Purplerock</a>
      <hr/>
     </div>

   </div>


    </div>
  );
}

