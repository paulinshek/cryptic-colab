import {CrosswordState} from "./crossword/crosswordTypes";
import {AuthenticationState} from "./authentication/authenticationTypes";
export interface RootState {
  crossword: CrosswordState;
  authentication: AuthenticationState
}
