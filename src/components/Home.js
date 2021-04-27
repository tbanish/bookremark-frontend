import React from 'react'
import '../css/Home.css'
import { GiStairsGoal } from "react-icons/gi";
import { ImBooks } from "react-icons/im";
import { IoIosTimer } from "react-icons/io";
import { GiRead } from "react-icons/gi";

const Home = (props) => {

  const handleClick = () => {
    props.history.push('/books/new')
  }

  return(
    <div className="Home">
      <div className="hero">
        <h1>Book Remark <GiRead /></h1>
        <p>Build your reading habit one book at a time.</p>
        <button onClick={handleClick} className="getStarted">Get Started</button>
      </div>
      <div className="contentGrid">
        <div className="contentGridcol"id="contentGridcol1">
          <h3>Set Your Goal</h3>
          <p>Book Remark makes it easy to build your reading habit.  Simply set your goal and we'll keep track of your progress, letting you know how many books you've read and how many more you'll need to read to hit your goal.</p>
          <GiStairsGoal className="contentIcon" id="contentGiStairsGoal" />
        </div>
        <div className="contentGridcol"id="contentGridcol2">
          <h3>Curate Your List</h3>
          <p>Keep a list of all the books you want to read in one easily accessible location - your Reading list.  This way you'll be sure to make time for the books you've always wanted to read.</p><br/><br/>
          <ImBooks className="contentIcon" id="contentImBooks" />
        </div>
        <div className="contentGridcol"id="contentGridcol3">
          <h3>Timed Note Taking Sessions</h3>
          <p>The best way to build a reading habit is to make it a visceral activity.  Book Remark will help you do this by allowing you to take diligent notes while timing your reading sessions.</p><br/><br/>
          <IoIosTimer className="contentIcon" id="contentIoIosTimer" />
        </div>
      </div>
      <footer>
        <p id="copyright">Copyright &copy; 2021 Tom Banish</p>
      </footer>
    </div>
  )
}

export default Home
