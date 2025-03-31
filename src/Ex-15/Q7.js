import React, {useState, useEffect} from "react";

function Q7(){
    const [joke, setJoke] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [click, setClick] = useState(false);

    useEffect(() => {
        fetch("https://api.chucknorris.io/jokes/random")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setJoke(data.value);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, [click]);

    return(
        <div style={{textAlign:'center', fontSize: '20px'}}>
            <h1>Random Joke from API</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {!loading && !error && <p>{joke}</p>}
            <button onClick={() => setClick(!click)}>Fetch Another Joke</button>
        </div>
    )
}

export default Q7;