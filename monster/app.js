new Vue({
 
   el: "#app",

   data: {
      gameStarted : false,
      myCurrentHealth : 100,
      compCurrentHealth : 100,
      interval : null
   },

   computed : {

       myHealth: function () {
           return {
               width:  this.myCurrentHealth + '%'
           }
       },

       compHealth: function () {
        return {
            width:  this.compCurrentHealth + '%'
        }
      },
      
   },

   watch : {
        myCurrentHealth : function () {
            if (this.myCurrentHealth <=0) {
                this.gameOver();
            }
        },

        compCurrentHealth : function () {
            if (this.compCurrentHealth <=0) {
                this.gameOver();
            }
        }
   },

   methods: {
       startGame : function () {
           this.gameStarted = true;
       },
       
       finishGame: function () {
           this.gameStarted = false;
       },

       gameOver: function () {
         this.finishGame();
         clearInterval(this.interval) ;
       },

       attack : function () {
          var me = this;
          alert('ere');
          this.interval = setInterval(function() {
            var num =  Math.floor((Math.random() * 10) + 1);
            console.log(num);

            if (num > 5) {
                me.myCurrentHealth -=5;
            } else {
                me.compCurrentHealth -=5;
            }

          }, 1000);


       }

   }

});