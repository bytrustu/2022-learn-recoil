import {atom, RecoilRoot, useRecoilState, useRecoilValue} from "recoil";

function App() {
  return (
    <RecoilRoot>
      <TextInput />
    </RecoilRoot>
  );
}

export default App;

const textState = atom({
    key: 'textState',
    default: '',
})

const TextInput = () => {
    const [text, setText] = useRecoilState(textState);

    const onChange = (event) => {
        setText(event.target.value);
    }

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={onChange}
            />
            <br />
            Echo: {text}
        </div>
    )
}
