import { useEffect, useState } from "react";
import axios from "axios";

export const Pokemon = ({ p }) => {
    const [data, setData] = useState(null);

    const GetImg = async () => {
        try {
            const res = await axios.get(p.url);
            setData(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        GetImg();
    }, [p.url]);

    return (
        <>
            <div className="poke_card" onClick={() => alert(`ты нажал на ${p.name} `  )}>
                <div className="title">
                    <span>{p.name}</span>
                    {data?.sprites?.front_default && (
                        <img src={data.sprites.front_default} alt={p.name} />
                    )}
                </div>
            </div>
        </>
    );
};
