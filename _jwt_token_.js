/**
 * 
 * -------------------------
 *      MAKE API SECURE
 * -------------------------
 * The person who should have
 * concent:
 * 1. assign two token for each user (access token, refresh token)
 * 2. access token contains: user identification(email, role, etc). valid for shorter duration.
 * 3. refresh token is used: to recreate an access token that was expired.
 * 4. if refresh is invalid then logout the user
 * 
 */

/**
 * jwt = json web token
 * 1. generate a token by using jwt.sign
 * 2. create api set to cookie, http only, secure, sameSite
 * 3. from client side withCredentials true
 * 4. cors setup origin and credentials: true
 * 
 */

/**
 * for secure api calls
 * 1. server side: install cookie parser and use it as a middleware
 * 2. req.cookie
 * 3. on the client side: make api call using axios withCredentials: true or credentials include while using fetch
 */