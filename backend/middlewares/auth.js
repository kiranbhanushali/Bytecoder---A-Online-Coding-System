var jwt = require('jsonwebtoken');
export const verifyJWT = (req ,res , next )=>{
    console.log( req.headers["authorization"]);
    if( req.headers["authorization"] === undefined ) res.send("enter token") 

    const token = req.headers["authorization"];
    if( !token ) {
        res.send( " enter token" ) ;
    } else{
        jwt.verify( token , 'mysecretkey', (err,decoded)=>{
            if( err) res.send( " auth not " ) ;
            else {
                req.decoded = decoded ; 
                next();
            }
        });
    }

}


