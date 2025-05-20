import React, { useState } from 'react';
import './App.css';

const Table = [
    {id: 0, alt: "Mak", filename: "obraz1.jpg", category:1, downloads: 35},
    {id: 1, alt:"Bukiet", filename: "obraz2.jpg", category: 1, downloads: 43},
    {id: 2, alt:"Dalmatyńczyk", filename: "obraz3.jpg", category:2, downloads: 2},
    {id: 3, alt:"Świnka morska", filename: "obraz4.jpg", category:2, downloads: 53},
    {id: 4, alt:"Rotwailer", filename: "obraz5.jpg", category:2, downloads: 43},
    {id: 5, alt:"Audi", filename: "obraz6.jpg", category:3, downloads: 11},
    {id: 6, alt:"kotki", filename: "obraz7.jpg", category:2, downloads: 22},
    {id: 7, alt:"Róża", filename: "obraz8.jpg", category:1, downloads: 33},
    {id: 8, alt:"Świnka morska", filename: "obraz9.jpg", category:2, downloads: 123},
    {id: 9, alt:"Foksterier", filename: "obraz10.jpg", category:2, downloads: 22},
    {id: 10, alt:"Szczeniak", filename: "obraz11.jpg", category:2, downloads: 12},
    {id: 11, alt:"Garbus", filename: "obraz12.jpg", category:3, downloads: 321}
];

function App() {
    const [showKwiaty, setShowKwiaty] = useState(true);
    const [showZwierzeta, setShowZwierzeta] = useState(true);
    const [showSamochody, setShowSamochody] = useState(true);

    const [zdjecia, setZdjecia] = useState(Table);

    const handleDownload = (id) => {
        setZdjecia(prevZdjecia =>
            prevZdjecia.map(image =>
                image.id === id ? { ...image, downloads: image.downloads + 1 } : image
            )
        );
    };

    const filtrowaneZdjecia = zdjecia.filter(item => {
        if (item.category === 1 && !showKwiaty) return false;
        if (item.category === 2 && !showZwierzeta) return false;
        if (item.category === 3 && !showSamochody) return false;
        return true;
    });


    return (
        <div className="App">
            <h1>Kategorie zdjęć</h1>
            <div>
                <input
                    type="checkbox"
                    id="kwiaty"
                    checked={showKwiaty}
                    onChange={() => setShowKwiaty(!showKwiaty)}
                />
                <label htmlFor="kwiaty">Kwiaty</label>

                <input
                    type="checkbox"
                    id="zwierzeta"
                    checked={showZwierzeta}
                    onChange={() => setShowZwierzeta(!showZwierzeta)}
                />
                <label htmlFor="zwierzeta">Zwierzęta</label>

                <input
                    type="checkbox"
                    id="samochody"
                    checked={showSamochody}
                    onChange={() => setShowSamochody(!showSamochody)}
                />
                <label htmlFor="samochody">Samochody</label>
            </div>
          <div className="image-galeria">
            {filtrowaneZdjecia.map((item) =>
                <div key={item.id} className="image-blok">
                    <img src={`/assets/${item.filename}`} alt={item.alt} className="image-mini"></img>
                    <h4>Pobrań: {item.downloads}</h4>
                    <button onClick={() => handleDownload(item.id)}>Pobierz</button>
                </div>
            )}
          </div>
        </div>
    );
}

export default App;