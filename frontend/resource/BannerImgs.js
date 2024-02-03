import { useEffect, useState } from "react";

function BannerImgs() {
    const [imgData, setImageData] = useState([]);

    useEffect(() => {
        fetch(`https://api.unsplash.com/photos/random?query=landscape&count=10&client_id=egGdck_ucQEu0R-MgXOje1Pu34aadZvcsczPN1gId60`)
            .then((res) => res.json())
            .then((res) => {
                const rawUrls = res.map((items) => items.urls.raw);
                setImageData(rawUrls);
            });
    }, []);

    return imgData;
}

export default BannerImgs;
