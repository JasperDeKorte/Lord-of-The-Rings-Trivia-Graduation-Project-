import { useContext } from "react"
import {globalStateContext, nameAvatarContext} from "../App";
const globalState = useContext(globalStateContext)
const nameAvatarValue = useContext(nameAvatarContext)

function saveData() {
    localStorage.setItem(`highscoreName${globalState.saveEdit}`, nameAvatarValue.name)
    localStorage.setItem(`highscoreScore${globalState.saveEdit}`, globalState.score)

    globalState.setSaveEdit(globalState.saveEdit + 1)

    if (globalState.saveEdit > 10) {
        globalState.setSaveEdit(0)
    }

    globalState.setScore(0)
}

export default saveData()