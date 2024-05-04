/**
 * install jsonwebtoken
 * jwt.sign(payload, secret, {expiresIn "1h"})
 * token client
 *
 *
 */

/**
 * how to store token in the client side
 * 1. memory --> ok type
 * 2. local storage --> ok type (xss)
 * 3. cookies: http only
 */

/**
 * 1. set cookies with http only. for development secure: false
 * 
 * 2.cors 
 * app.use(cors({
  origin:['http://localhost:5000'],
  credentials:true
}));
 * 
 * 3. client side axios setting
 * in axios set credentials: true 
 * 
 * 
 */

/**
 * 1. to send cookies from the client make sure you added withCredentials true for the api call using axios
 * 2. use cookie parser as middleware
 */
