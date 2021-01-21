 const string = `#Mickey * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background-color: #cc3333;
  height: 100vh;
}
#Mickey {
  position:absolute;
}
.ear {
  width: 280rem;
  height: 350rem;
  background-color: #000000;
  border-radius: 50%;
}
.ear.left {
  position: absolute;
  top: -200rem;
  left: -120rem;
  transform: rotate(20deg);
}
.ear.right {
  position: absolute;
  top: -200rem;
  right: -120rem;
  transform: rotate(-20deg);
}
.head {
  position: relative;
  width: 510rem;
  height: 525rem;
  background-color: #000000;
  border-radius: 50%;
  top: 200rem;
}
.eyesocket {
  position: absolute;
  width: 215rem;
  height: 380rem;
  background-color: #fff;
  border-radius: 50%;
}
.face > .eyesocket.left {
  left: 60rem;
  top: 40rem;
}
.face > .eyesocket.right {
  right: 60rem;
  top: 40rem;
}
.eyebox {
  position: absolute;
  width: 160rem;
  height: 190rem;
  left: 175rem;
  top: 140rem;
}
.eye {
  position: absolute;
  width: 60rem;
  height: 180rem;
  background-color: #fff;
  border: solid #000;
  border-radius: 52%;
  border-width: 3rem 7rem;
}
.eye.left {
  transform: rotate(-5deg);
  left: 15rem;
  overflow: hidden;
}
.eye.right {
  transform: rotate(5deg);
  right: 15rem;
  overflow: hidden;
}

.eyelid-top{
    position: absolute;
    animation: eyelidtop 5s linear running infinite;
    border-bottom:4rem solid #000;
    border-radius:52% 52% 0 0;
    height:130rem;
    width: 46rem;
    top:0;
    background-color:#f5f5f5;
}
.eyelid-bottom{
    position: absolute;
    animation: eyelidbottom 5s linear running infinite;
    border-top:4rem solid #000;
    border-radius: 0 0 52% 52%;
    height:45rem;
    width: 46rem;
    bottom:0;
    background-color:#f5f5f5;
}
@keyframes eyelidtop{
    0% {
    top: -135rem;
}
    14% {
    top: -135rem;
}
21% {
    top: 0;
}
28% {
    top: -135rem;
}
100% {
    top: -135rem;
}
}
@keyframes eyelidbottom{
    0% {
    bottom: -45rem;
}
7% {
    bottom: 0;
}
14% {
    bottom: -45rem;
}
100% {
    bottom: -45rem;
}
}
.eyeball {
  position: absolute;
  width: 35rem;
  height: 65rem;
  background-color: #000;
  border-radius: 50%;
  bottom: 1rem;
}
.eyeball.left {
  left: 6rem;
}
.eyeball.right {
  right: 6rem;
}
.nosetop {
  position: absolute;
  width: 140rem;
  height: 50rem;
  border-radius: 50%;
  background-color: #fff;
  border-top: 8rem solid #000;
  left: 185rem;
  top: 300rem;
}
.nose {
  position: absolute;
  top: 320rem;
  left: 177rem;
  width: 156rem;
  height: 85rem;
  border-radius: 50%;
  background-color: #000;
}
.nosebottom {
  position: absolute;
  background-color: #ffff;
  left: 177rem;
  top: 380rem;
  width: 156rem;
  height: 85rem;
}
.cheek {
  position: absolute;
  width: 150rem;
  height: 270rem;
  border: 5rem solid #000;
  background-color: #fff;
  border-radius: 50%;
  bottom: -5rem;
  border-bottom: 0;
}
.cheek.left {
  bottom: -10rem;
  left: 20rem;
  border-right: 0;
  transform: rotate(-45deg);
}
.cheek.right {
  bottom: -10rem;
  right: 20rem;
  border-left: 0;
  transform: rotate(45deg);
}
.chin {
  position: absolute;
  left: 165rem;
  bottom: -25rem;
  width: 180rem;
  height: 100rem;
  border-radius: 50%;
  background-color: #fff;
  border-bottom: 5rem solid #000;
}
.lipblock {
  position: absolute;
  width: 380rem;
  height: 280rem;
  border-radius: 50%;
  background-color: #fff;
  bottom: 70rem;
  left: 65rem;
}
.lip {
  position: absolute;
  width: 380rem;
  height: 280rem;
  border-radius: 50%;
  background-color: #fff;
  border-bottom: 10rem solid #000;
  bottom: 70rem;
  left: 65rem;
}
.mouth-wrapper > .mouth {
  position: absolute;
  width: 155rem;
  height: 200rem;
  border-radius: 50%;
  border: solid #000;
  border-width: 5rem 10rem;
  left: 177.5rem;
  bottom: 0rem;
  background-color: #000;
  overflow: hidden;
}
.mouth-wrapper > .mouth > .tongue1{
    position: absolute;
    width:100rem;
    height:100rem;
    border-radius: 50%;
    background-color: #FF0000;
    bottom:-50rem;
    display:block;
}
.mouth-wrapper > .mouth > .tongue2{
    position: absolute;
    width:100rem;
    height:100rem;
    border-radius: 50%;
    background-color: #FF0000;
    bottom:-50rem;
    right: 0rem;
    border-top:5rem solid #000;
    display:block;
}
.line{
    position: absolute;
    width: 50rem;
    height: 20rem;
    border-top: 5rem solid #000;
    border-radius: 50%;
    bottom:170rem;
}
.line.left{
    left:45rem;
    transform: rotate(-20deg);
}
.line.right{
    right:45rem;
    transform:rotate(20deg);
}`
 export default string