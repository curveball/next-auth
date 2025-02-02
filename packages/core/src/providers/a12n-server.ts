import { OAuthUserConfig } from "./oauth.js";

/**
 * <div class="provider" style={{ display: "flex", justifyContent: "space-between", color: "#fff" }}>
 * <span>Built-in <b>a12n-server</b> integration.</span>
 * <a href="https://github.com/.org">
 *   <img style={{display: "block"}} src="https://authjs.dev/img/providers/a12n-server.svg" height="48" width="48"/>
 * </a>
 * </div>
 *
 * @module providers/a12n-server
 */
export type PrivilegeMap = {
    [resource: string]: string[];
  };
  
/**
 * @module providers/a12n-server
 */
export interface A12nServerProfile extends Record<string, any> {
    /** Token active status */
    active: boolean;
    /** Authorized scopes of the token */
    scope?: string;
    /** A string that's used to configure OAuth2 clients. */
    client_id?: string;
    username?: string;
    token_type?: 'bearer' | 'refresh_token';
    exp?: number;
    iat?: number;
    nbf?: number;
    sub?: string;
    aud?: string;
    iss?: string;
    jti?: string;
    nonce?: string;
    /**
     * A12n-server additions.
     */
    privileges: PrivilegeMap;
    _links: {
    'authenticated-as': {
        href: string;
    };
    };
}

/**
 * Add a12n-server login to your page.
 *
 * ### Setup
 *
 * #### Callback URL
 * ```
 * https://example.com/api/auth/callback/a12n-server
 * ```
 *
 * #### Configuration
 *```ts
 * import { Auth } from "@auth/core"
 * import a12n from "@auth/core/providers/a12n-server"
 *
 * const request = new Request(origin)
 * const response = await Auth(request, {
 *   providers: [
 *     a12n({ 
 *     clientId: A12N_CLIENT_ID, 
 *     clientSecret: A12N_CLIENT_SECRET 
 *    }),
 *   ]
 * })
 * ```
 *
 * ### Resources
 *
 * - a12n-server [Overview](https://github.com/curveball/a12n-server/blob/main/docs/getting-started.md)
 * - Sign in with a12n-server [REST API]()
 * - [How to retrieve]() the user's information from your a12n-server
 * - [Learn more about OAuth](https://authjs.dev/concepts/oauth)
 * - [Creating the Client Secret]()
 *
 * ### Notes
 * 
 * Grant type: Authorization Code
 * 
 * By default, Auth.js assumes that the a12n-server Oauth2 provider is
 * based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.
 *
 * :::tip
 *
 * ## Help
 *
 * If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).
 *
 * Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from
 * the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec,
 * we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).
 */

 export default function a12n(
    config: OAuthUserConfig<A12nServerProfile>
  ): OAuthUserConfig<A12nServerProfile> {
    return {
        id: "a12n-server",
        name: "a12n-server",
        issuer: config.issuer,
        clientId: config.clientId, 
        clientSecret: config.clientSecret, 
      }
  }