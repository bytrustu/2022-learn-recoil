import React from 'react';
import {atom, selector, useRecoilState, useRecoilValue} from "recoil";

const Home = () => {
    return (
        <div>
            Home2
            <TextInput/>
            <CharacterCount/>
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
