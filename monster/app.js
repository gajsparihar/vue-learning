new Vue({
 
   el: "#app",

   data: {
      gameStarted : false,
      myCurrentHealth : 100,
      compCurrentHealth : 100,
      interval : null,
      logs : []
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
           this.myCurrentHealth = this.compCurrentHealth = 100;
           clearInterval(this.interval) ;
       },


       attackAlgo : function (power, num) {
           

            var obj = {};
            if (num > 5) {
                obj.player = false; 
                this.myCurrentHealth -=power;
            } else {
                obj.player = true;
                this.compCurrentHealth -=power;
            }

            this.logs.push(obj);
       },

       gameOver: function () {
         this.finishGame();
         
       },

       attack : function () {
          var me = this;
          
          this.interval = setInterval(function() {
            var num =  Math.floor((Math.random() * 10) + 1);
            me.attackAlgo(5, num);

          }, 1000);


       },

       heal: function () {

           if (this.myCurrentHealth <= 100) {

                this.myCurrentHealth += 5;

                this.myCurrentHealth > 100 ? 100 : this.myCurrentHealth;

           }
       },

       specialAttack: function () {
        this.attackAlgo(20, 1);
      }

   }

});