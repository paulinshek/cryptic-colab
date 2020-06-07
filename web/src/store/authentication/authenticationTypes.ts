export interface AuthenticationState {
    isAuthenticated: boolean;
    currentUser: User | null;
    authenticationUrl: string | null;
  }

  export enum AuthenticationActionTypes {
	REQUEST_GET_AUTHENTICATION_URL = "authentication/REQUEST_GET_AUTHENTICATION_URL",
	GET_AUTHENTICATION_URL_SUCCESS = "authentication/GET_AUTHENTICATION_URL_SUCCESS",
	GET_AUTHENTICATION_URL_FAILURE = "authentication/GET_AUTHENTICATION_URL_FAILURE",
	REQUEST_AUTHENTICATE = "authentication/REQUEST_AUTHENTICATE",
	AUTHENTICATE_SUCCESS = "authentication/AUTHENTICATE_SUCCESS",
	AUTHENTICATE_FAILURE = "authentication/AUTHENTICATE_FAILURE"
  }

export interface User {
	Name: string;
	GivenName: string;
	FamilyName: string;
	Profile: string;
	Picture: string;
	Email: string;
	EmailVerified: string;
	Gender: string;
}