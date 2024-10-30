import { FC } from "react";
import style from "./JokeInput.module.css";

type JokeInputProps = {
    count: number;
    setCount: (count: number) => void;
};

const JokeInput: FC<JokeInputProps> = ({ count, setCount }) => {
    return (
        <div className={style.container_input}>
            <label htmlFor="joke">Number of jokes:</label>
            <input 
                id="joke" 
                type="number" 
                value={count} 
                onChange={(e) => setCount(Number(e.target.value))} 
                min="1" 
                placeholder="Enter number" 
            />
        </div>
    );
};

export default JokeInput;
