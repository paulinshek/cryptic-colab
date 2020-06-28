export interface AuthenticationState {
    isAuthenticated: boolean;
    currentUser: User | null;
	isAuthenticationInProgress: boolean;
  }

  export enum AuthenticationActionTypes {
	REQUEST_VISIT_AUTHENTICATION_URL = "authentication/REQUEST_GET_AUTHENTICATION_URL",
	VISIT_AUTHENTICATION_URL_FAILURE = "authentication/GET_AUTHENTICATION_URL_FAILURE",
	REQUEST_AUTHENTICATE = "authentication/REQUEST_AUTHENTICATE",
	AUTHENTICATE_SUCCESS = "authentication/AUTHENTICATE_SUCCESS",
	AUTHENTICATE_FAILURE = "authentication/AUTHENTICATE_FAILURE",
	REQUEST_UNAUTHENTICATE = "authentication/REQUEST_UNAUTHENTICATE",
	UNAUTHENTICATE_SUCCESS = "authentication/UNAUTHENTICATE_SUCCESS",
	REQUEST_GET_AUTHENTICATED_USER = "authentication/REQUEST_GET_AUTHENTICATED_USER",
	GET_AUTHENTICATED_USER_SUCCESS = "authentication/GET_AUTHENTICATED_USER_SUCCESS",
	GET_AUTHENTICATED_USER_FAILURE = "authentication/GET_AUTHENTICATED_USER_FAILURE",
  }

export interface User {
	name: string;
	given_name: string;
	family_name: string;
	profile: string;
	picture: string;
	email: string;
	email_verified: boolean;
	gender: string;
}