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