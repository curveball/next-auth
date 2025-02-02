import type { Profile } from "../types.js"
import type { CommonProviderOptions } from "./index.js"
import { OAuthUserConfig } from "./oauth.js"
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

/**
 * @module providers/a12n-server
 */
export interface A12nServerProfile
  extends Record<keyof CommonProviderOptions, string> {
  id: string
  /* The provider name used on the default sign-in page's sign-in button. */
  name: string
  token_type?: "bearer" | "refresh_token"
  type: "oauth"
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
export interface A12nServerUserProfile
  extends Record<keyof Profile, Profile[keyof Profile]> {
  sub: string
  email?: string
  email_verified?: boolean
  name: string
  website?: string
  zoneinfo?: string
  given_name?: string
  family_name?: string
  preferred_username?: string
  phone_number?: string
  phone_number_verified?: boolean
  locale?: string
  updated_at: number
  picture?: string
  address?: string
  birthdate?: string
}

export default function a12n(
  config: OAuthUserConfig<A12nServerProfile>
): OAuthUserConfig<A12nServerUserProfile> {
  return {
    id: "a12n-server",
    name: "a12n-server",
    issuer: config.issuer,
    clientId: config.clientId,
    clientSecret: config.clientSecret,
    authorization: config.authorization,
    userinfo: config.userinfo,
    profile(profile) {
      return {
        ...profile,
        updated_at: Date.now(),
      } satisfies A12nServerUserProfile
    },
  }
}
