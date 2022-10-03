import { useState } from 'react';
import Home from "../Home/Home";
import Deck from "../Deck/Deck";
import "./App.css";



export default function App() {

    const [deckAndMeta, setDeckAndMeta] = useState({deck:"", meta:""});
    const [visible, setVisible] = useState(true);
    
    return (
        <>
            <Home visible={visible} setVisible={setVisible} deckAndMeta={deckAndMeta} setDeckAndMeta={setDeckAndMeta}/>
            <Deck deckAndMeta={deckAndMeta} setDeckAndMeta={setDeckAndMeta} visible={visible} setVisible={setVisible}/>
        </>
    );
}

