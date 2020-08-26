<template>
      <div id="scene">
      <div id="cube">
         <div id="front">1</div>
         <div id="top">2</div>
         <div id="back">3</div>
         <div id="bottom">4</div>
         <div id="left">5</div>
         <div id="right">6</div>
      </div>
   </div>
</template>

<script>
export default {
   name: "Cube"
}
</script>

<style lang="scss" scoped>
#scene {
   width: 200px;
   height: 200px;
   perspective: 200px;
   text-align: center;
   font-size: 40px;
}

#cube {
   position: relative;
   width: 100%;
   height: 100%;
   transform-style: preserve-3d;
   transform: translateZ(-100px);
   & > * {
      position: absolute;
      width: 100%;
      height: 100%;
      border: 2px solid black;
   }
}

#front {
   background-color: rgba(163, 36, 224, 0.1);
   transform: translateZ(100px);
}

#right {
   transform: rotateY(90deg) translateZ(100px);
   background-color: rgba(34, 182, 51, 0.8);

}

#left {
   transform: rotateY(-90deg) translateZ(100px);
   background-color: rgba(180, 144, 220, 0.5);
}

#top {
   transform: rotateX(90deg) translateZ(100px);
   background-color: rgba(227, 242, 189, 0.7);
}

#bottom {
   transform: rotateX(-90deg) translateZ(100px);
   background-color: rgba(183, 247, 139, 0.1);
}

#back {
   background-color: rgba(85, 152, 148, 0.3);
   transform: rotateY(180deg) translateZ(100px);
}

</style>