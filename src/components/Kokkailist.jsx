import React, { useState, useEffect } from "react";

const Kokkailist = (props) => {
    const [KokkaiData, setKokkaiData] = useState(null);
    useEffect(() => {
        const result = props
        .getData?.(props.word)
        .then((response) => setKokkaiData(response));
    }, [props]);
    return (
        // <div>
        //     <ul>
        //         { KokkaiData === null
        //         ? (<p>now loading...</p>)
        //         : (<p>{JSON.stringify(KokkaiData.data.meetingRecord)}</p>)
        //         }
        //     </ul>
        // </div>
        <div>
            <ul>
                { KokkaiData === null
                    ? (<p>now loading...</p>)
                    : (KokkaiData.data.meetingRecord.map((x, index) => (
                    <li key={index}><a href={x.meetingURL}>{x.meetingURL}</a></li>
                        ))
                    )
                }
            </ul>
        </div>
    )
}

export default Kokkailist
