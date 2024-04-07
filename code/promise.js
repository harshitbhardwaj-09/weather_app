const promiseone=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task is complete');
        resolve();
    },1000)
    })
    promiseone.then(function(){
        console.log('promise consumed');
    })
