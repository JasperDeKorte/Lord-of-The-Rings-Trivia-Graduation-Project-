import {Howl} from "howler";
import swordDraw from "../audioclips/swordDraw.mp3";
import swordSFX from "../audioclips/SwordPullOut.mp3";
import fail from "../audioclips/awh-disappointed-crowd-sound-effect.mp3";

export const sound1 = new Howl({
    src: [swordSFX],
    autoplay: false,
    volume: 0.2,
})
export const sound2 = new Howl({
    src: [swordDraw],
    autoplay: false,
    volume: 0.2,
})

export const sound3 = new Howl({
    src: [fail],
    autoplay: false,
    volume: 0.2,

})