// import Atropos library
import Atropos from 'atropos';

if (window.innerWidth > 1000){
  const myAtropos = Atropos({
    el: '.my-atropos',
    activeOffset: 40,
    shadowScale: 1.05,
    onEnter() {
      // console.log('Enter');
    },
    onLeave() {
      // console.log('Leave');
    },
    onRotate(x, y) {
      // console.log('Rotate', x, y);
    }
  });
}