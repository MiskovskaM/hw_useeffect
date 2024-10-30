import { useState } from "react";
import JokeInput from "./JokeInput";
import style from "./JokeDisplay.module.css";


type Joke = {
    id: string;
    value: string; 
};

const DataDisplay: React.FC<Joke> = () => {
    
    const [data, setData] = useState<Joke[]>([]); 
    const [count, setCount] = useState(1); 
    const [done, setDone] = useState(false);

   
    const fetchJokes = async () => {
        const fetchedJokes: Joke[] = []; // Pole pro načtené vtipy
        setDone(false);
        for (let i = 0; i < count; i++) {
            try {
                const response = await fetch("https://api.chucknorris.io/jokes/random");
                const jokeData = await response.json();
                console.log(jokeData); 
                fetchedJokes.push(jokeData); 
                setDone(true);

            } catch (error) {
                console.error("Error fetching joke:", error);
            }
        }
        setData(fetchedJokes); 
        setDone(true);
    };

    return (
        <div className={style.container}>
            <JokeInput count={count} setCount={setCount} />
            <div className={style.container_btn}>
                 <button className={style.container_btn_generate} onClick= {fetchJokes}>Generate Jokes</button> 
                 {done && <p className={style.container_done}>Done</p>}
            </div>
            <div >
                {data.map((joke, index) => (
                    <p key={index}>{index + 1}. {joke.value}</p> 
                ))}
            </div>
            <button className={style.container_btn_clear} onClick={() => {setData([]); setDone(false);}}>Clear Jokes</button>
            

        </div>
    );
};

export default DataDisplay;
