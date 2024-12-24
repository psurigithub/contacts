const jwt =  require('jsonwebtoken');

const genarateToken = function(){
   
    const PayLoad = {name:'suri',email:'suribabuparepalli03@gmail.com'} 
    const secreateKey = 'suri123';
    const expireTime = {expiresIn:'1h'};
    
    const token = jwt.sign(PayLoad,secreateKey,expireTime) 
    console.log(token)
} 

genarateToken() 
