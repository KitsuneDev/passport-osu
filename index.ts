import PassportOauth2 from 'passport-oauth2';
import { OsuApi } from './types/OsuApiMe';
import axios, { AxiosResponse } from 'axios';
import tunnel from 'tunnel';
export class OsuStrategy extends PassportOauth2 {
    constructor(options: OsuStrategyOptions, verify: PassportOauth2.VerifyFunction){
        var [opt, check] = [options || ({} as PassportOauth2.StrategyOptions), verify];
        opt.authorizationURL = options.authorizationURL || "https://osu.ppy.sh/oauth/authorize"
        opt.tokenURL = options.tokenURL || "https://osu.ppy.sh/oauth/token"
        opt.scope = options.scope || ["identify","public","friends.read"]
        super(opt, check)
        this.name = "osu"
        
    }

    userProfile(accessToken: string,  done: (err?: Error | null, profile?: any)=>void){
        /*var debug = axios.create({
            httpsAgent: tunnel.httpsOverHttp({
                
              proxy: {
                host: '127.0.0.1',
                port: 8866,
              }
            }),
            proxy: false,
          });;*/
        axios.get("https://osu.ppy.sh/api/v2/me/", {headers: {"Authorization": `Bearer ${accessToken}`}})
        .then((response: AxiosResponse)=>{
            var profile: OsuApi.Me.MeResponse
            if (response.status != 200) {
                console.log("Error!")
                console.log(JSON.stringify(response))
                return done(new OsuStrategy.InternalOAuthError('Failed to fetch user profile: '+response.status, response.statusText));
              }
               
              try {
                  console.log(response.data)
                profile = response.data as OsuApi.Me.MeResponse
              } catch (ex) {
                  console.log(ex)
                return done(new Error('Failed to parse user profile'));
              }
              var final: OsuAuthProfile = {...profile,
                provider: "osu!",
                //token: accessToken
            };
            done(null, final)
        })
    }
}

export class OsuStrategyOptions implements PassportOauth2.StrategyOptions {
    passReqToCallback?: false | undefined;
    authorizationURL: string = "https://osu.ppy.sh/oauth/authorize"
    tokenURL: string = "https://osu.ppy.sh/oauth/token"
    clientID: string
    clientSecret: string
    callbackURL?: string | undefined;
    customHeaders?: import("http").OutgoingHttpHeaders | undefined;
    scope?: string | string[] | undefined;
    scopeSeparator?: string | undefined;
    sessionKey?: string | undefined;
    store?: PassportOauth2.StateStore | undefined;
    state?: any;
    skipUserProfile?: any;
    pkce?: boolean | undefined;
    proxy?: any;

    constructor(options : {
        clientID: string,
        clientSecret:string,
        callbackURL: string
    }){
        this.clientID = options.clientID
        this.clientSecret = options.clientSecret;
        this.callbackURL = options.callbackURL
    }
    
    
    

}
/**
 * I should remind you that many info here will change.
 * *Please use the id Property for identification*
 * And for god's sake, don't compare two instances to determine if they are the same person.
 */
export interface OsuAuthProfile extends OsuApi.Me.MeResponse {
    provider: string,
    //token: string,
    
}