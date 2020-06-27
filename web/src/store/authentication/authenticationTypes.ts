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
	REQUEST_UNAUTHENTICATE = "authentication/REQUEST_UNAUTHENTICATE"
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