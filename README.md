### editordraft
```
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react"
import { DraftEditor, DraftViewer } from "editordraft"



function App() {


  const [preHtml, setPreHtml] = useState("")
  const [themeMode, setThemeMode] = useState("light")
  const [colorIndex, setColorIndex] = useState(2)

  useEffect(function () {
    console.log(themeMode)
    console.log(colorIndex)
  })

  return (
    <>

      <div>
        <button onClick={function () {
          setThemeMode(pre => pre === "light" ? "dark" : "light")
        }}>mode</button>

        <button onClick={function () {
          setColorIndex(pre => pre + 1)
        }}>color</button>

      </div>
      <DraftEditor
        colorIndex={colorIndex}
        themeMode={themeMode}
        peopleList={["UweF23", "UweF22", "TonyCerl", "JimWil", "大发发", "Jimberg", "m大Gsd哈"]}
        avatarPeopleList={["UweF23", "TonyCerl", "大发发", "m大Gsd哈"]}
        downloadAvatarUrl={`https://picsum.photos/200`}
        genAvatarLink={function (downloadAvatarUrl, personName) {
          return downloadAvatarUrl// + personName
        }}

        onSubmit={function (preHtmlObj, { editorState, theme, voteArr, voteTopic, pollDuration, voteId, imageObj, imageBlockNum, setDisableSubmit, clearState }) {

          console.log(preHtmlObj)
          setPreHtml(preHtmlObj.content)
          clearState()
          setDisableSubmit(false)
          // const promiseArr = [
          //     ...uploadPreHtml(preHtmlObj),  // commentOut when local
          //     ...uploadImage(imageObj), // commentOut when local
          //     ...uploadVote({ voteArr, voteTopic, pollDuration, voteId }) // commentOut when local
          // ]

          // Promise.allSettled(promiseArr).then((arr) => {
          //     setDisableSubmit(false)
          //     clearState()
          //     setPostArr(pre => [preHtmlObj, ...pre])
          // })
        }}


      />

      <DraftViewer
        colorIndex={colorIndex}
        themeMode={themeMode}
        preHtml={preHtml}
        downloadImageUrl=""
        downloadVoteUrl=""
      />

    </>
  );


}

export default App;

```


git push -f origin master
npm version patch
npm publish
