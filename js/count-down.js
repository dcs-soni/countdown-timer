class countDown { 
    //1 - Create a Constructor function
    constructor(expiredDate, onRender, onComplete) {

        
        this.onRender = onRender;  
        this.onComplete = onComplete;
        //Based on expiredDate argument, calculate remaining time in miliseconds
        
        //Because we need to access the Remaining time(timeRemaining) across methods of the 
        //class, a property is defined in the countDown Class.

    }
    setExpiredDate(expiredDate) {
        //2 - to get current time
        const currentTime = new Date().getTime();   
        
        //calculates the remaining time
        this.timeRemaining = expiredDate.getTime() - currentTime;

        //decides whether the countdown completes or start
        this.timeRemaining > 0 ? this.start() : this.complete();
    };

    //3
    complete() {
        if(typeof this.onComplete === 'function') {
            onComplete();
        }
    }
    //4
    start() {

        //A timer is set
        const intervalID = setInterval (() => {

            //update the timer
            this.timeRemaining -= 1000;

            if(this.timeRemaining < 0) {
                 //call the callback
                complete();

                //clear the interval if expired
                clearInterval(intervalID);
            } else {
                this.update();
            }
        },1000);     
    }
}