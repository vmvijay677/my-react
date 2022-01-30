import "./index.css";
import { useState } from "react";


export default function App() {
  return (
    <div className="App">
      <Movieslist />
    </div>
  );
}

function Movieslist() {
  //let like = 4;
  const [like1, setLike1] = useState(0);
  const [dislike1, setDislike1] = useState(0);

  const [like2, setLike2] = useState(0);
  const [dislike2, setDislike2] = useState(0);

  const [like3, setLike3] = useState(0);
  const [dislike3, setDislike3] = useState(0);

  const [like4, setLike4] = useState(0);
  const [dislike4, setDislike4] = useState(0);

  const [like5, setLike5] = useState(0);
  const [dislike5, setDislike5] = useState(0);
  return (
    <div className="Movie">
      <h1>IMDb's Favourite (Top 5)</h1>
      <img src="https://m.media-amazon.com/images/M/MV5BNmU1OTYzYzAtMDcyOS00MDI0LTg2ZmQtYTEyMDdmMmQ0MjY5XkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_.jpg" alt="movie-poster"></img>
      <h2>1. Master (2021)</h2>
      <p>
        <button className="btn btn-success" onClick={() => setLike1(like1 + 1)}>👍 Like {like1}</button> &nbsp; &nbsp;
        <button className="btn btn-danger" onClick={() => setDislike1(dislike1 + 1)}>👎 Dislike {dislike1}</button>
      </p>
      <p className="Summary">Master is a 2021 Indian Tamil-language action thriller film, written and directed by Lokesh Kanagaraj. Produced by Xavier Britto, under his maiden production house XB Film Creators, the film stars Vijay and Vijay Sethupathi while Malavika Mohanan, Shanthanu Bhagyaraj, Andrea Jeremiah, Arjun Das and Gouri G. Kishan play supporting roles. The film revolves around an alcoholic professor, J. D. (Vijay), who takes a three-month teaching job in a juvenile home, unbeknownst to him. He soon clashes with a ruthless gangster named Bhavani (Vijay Sethupathi), who uses the children as the scapegoat for his criminal activities.</p>
      <span className="Span1">Release date: </span>
      <span className="Span2">13 January 2021</span>
      <br></br><br></br>
      <span className="Span1">IMDb Rating: </span>
      <span className="Span2">7.8/10</span>
      <br></br><br></br>
      <span className="Span1">Box office: </span>
      <span className="Span2">est. ₹230-300 crores</span>
      <br></br><br></br>
      <span className="Span1">Budget: </span>
      <span className="Span2">₹135 crores</span>

      <br></br>
      <br></br>
      <br></br>

      <img src="https://www.sify.com/uploads/1-tgykJ4ihfiagi.jpg" alt="movie-poster"></img>
      <h2>2. Bigil (2019)</h2>
      <p>
        <button className="btn btn-success" onClick={() => setLike2(like2 + 1)}>👍 Like {like2}</button> &nbsp; &nbsp;
        <button className="btn btn-danger" onClick={() => setDislike2(dislike2 + 1)}>👎 Dislike {dislike2}</button>
      </p>
      <p className="Summary">Bigil is a 2019 Indian Tamil-language sports action film written and directed by Atlee and produced by Kalpathi S. Aghoram under the banner AGS Entertainment. The film stars Vijay in dual roles as Michael, a footballer-turned-mobster and his father Rayappan, a don. It also stars Nayanthara, Jackie Shroff, Vivek and Kathir in other prominent roles. It revolves around Micheal, who decides to coach a women's football team when their coach gets attacked. He faces challenges when his team does not cooperate with him due to his violent background and also finds himself hunted by some rivals who want revenge.</p>
      <span className="Span1">Release date: </span>
      <span className="Span2">25 October 2019</span>
      <br></br><br></br>
      <span className="Span1">IMDb Rating: </span>
      <span className="Span2">6.9/10</span>
      <br></br><br></br>
      <span className="Span1">Box office: </span>
      <span className="Span2">est. ₹285-304.7 crores</span>
      <br></br><br></br>
      <span className="Span1">Budget: </span>
      <span className="Span2">₹180 crores</span>

      <br></br>
      <br></br>
      <br></br>

      <img src="https://pbs.twimg.com/media/DLyjImyVwAAw5No.jpg" alt="movie-poster"></img>
      <h2>3. Mersal (2017)</h2>
      <p>
        <button className="btn btn-success" onClick={() => setLike3(like3 + 1)}>👍 Like {like3}</button> &nbsp; &nbsp;
        <button className="btn btn-danger" onClick={() => setDislike3(dislike3 + 1)}>👎 Dislike {dislike3}</button>
      </p>
      <p className="Summary">Mersal is a 2017 Indian Tamil-language action thriller film, directed by Atlee who co-wrote the film with K. V. Vijayendra Prasad and S. Ramana Girivasan. Produced by Thenandal Studio Limited in their 100th production, the film stars Vijay, S. J. Surya, Sathyaraj, Vadivelu, Hareesh Peradi, Kajal Aggarwal, Nithya Menen and Samantha.</p>
      <span className="Span1">Release date: </span>
      <span className="Span2">18 October 2017</span>
      <br></br><br></br>
      <span className="Span1">IMDb Rating: </span>
      <span className="Span2">7.8/10</span>
      <br></br><br></br>
      <span className="Span1">Box office: </span>
      <span className="Span2">est. ₹260 crores</span>
      <br></br><br></br>
      <span className="Span1">Budget: </span>
      <span className="Span2">₹120 crores</span>

      <br></br>
      <br></br>
      <br></br>

      <img src="https://live.staticflickr.com/65535/10496255225_2744d915de_b.jpg" alt="movie-poster"></img>
      <h2>4. Theri (2016)</h2>
      <p>
        <button className="btn btn-success" onClick={() => setLike4(like4 + 1)}>👍 Like {like4}</button> &nbsp; &nbsp;
        <button className="btn btn-danger" onClick={() => setDislike4(dislike4 + 1)}>👎 Dislike {dislike4}</button>
      </p>
      <p className="Summary">Theri is a 2016 Indian Tamil-language action thriller film written and directed by Atlee and produced by Kalaipuli S. Thanu under the banner V Creations. The film stars Vijay and Samantha Ruth Prabhu. The film's music is composed by G. V. Prakash Kumar, with cinematography handled by George C. Williams and editing done by Ruben. The story revolves around a former police officer who is on a mission to protect his daughter from gangsters and seek revenge for the death of his wife.</p>
      <span className="Span1">Release date: </span>
      <span className="Span2">14 April 2016</span>
      <br></br><br></br>
      <span className="Span1">IMDb Rating: </span>
      <span className="Span2">7.4/10</span>
      <br></br><br></br>
      <span className="Span1">Box office: </span>
      <span className="Span2">est. ₹150 crores</span>
      <br></br><br></br>
      <span className="Span1">Budget: </span>
      <span className="Span2">est. ₹75 crores</span>

      <br></br>
      <br></br>
      <br></br>

      <img src="https://pbs.twimg.com/media/BqptqsXCEAEBQjE?format=jpg&name=large" alt="movie-poster"></img>
      <h2>5. Kaththi (2014)</h2>
      <p>
        <button className="btn btn-success" onClick={() => setLike5(like5 + 1)}>👍 Like {like5}</button> &nbsp; &nbsp;
        <button className="btn btn-danger" onClick={() => setDislike5(dislike5 + 1)}>👎 Dislike {dislike5}</button>
      </p>
      <p className="Summary">Kaththi is a 2014 Indian Tamil-language action drama film directed by A. R. Murugadoss, and produced by Allirajah Subaskaran under the banner Lyca Productions, along with Ayngaran International, as the co-producer and Eros International, who distributed the film. The film stars Vijay in a dual role as lookalikes Kathiresan and Jeevanantham, and focuses on the issue of farmers committing suicide due to corporate encroachment. Samantha Ruth Prabhu, Neil Nitin Mukesh, Tota Roy Chowdhury and Sathish, appear in other prominent roles.</p>
      <span className="Span1">Release date: </span>
      <span className="Span2">22 October 2014</span>
      <br></br><br></br>
      <span className="Span1">IMDb Rating: </span>
      <span className="Span2">8.1/10</span>
      <br></br><br></br>
      <span className="Span1">Box office: </span>
      <span className="Span2">est. ₹130 crores</span>
      <br></br><br></br>
      <span className="Span1">Budget: </span>
      <span className="Span2">₹70 crores</span>

      <br></br>
      <br></br>
    </div>
  );
}
