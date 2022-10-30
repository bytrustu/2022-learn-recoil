import React from 'react';
import {atom, selector, useRecoilState, useRecoilValue} from "recoil";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <TextInput/>
            <CharacterCount/>
            <button onClick={() => { navigate('/home2'); }}>버튼</button>
        </div>
    );
};

export default Home;

const textState = atom({
    key: 'textState', default: '',
})

const TextInput = () => {
    const [text, setText] = useRecoilState(textState);

    const onChange = (event) => {
        setText(event.target.value);
    }

    return (<div>
        <input
            type="text"
            value={text}
            onChange={onChange}
        />
        <br/>
        Echo: {text}
    </div>)
}

const charCountState = selector({
    key: 'charCountState', get: ({get}) => {
        const text = get(textState);

        return text.length;
    },
})

const CharacterCount = () => {
    const count = useRecoilValue(charCountState);

    return (<>
        Character Count: {count}
    </>)
}
