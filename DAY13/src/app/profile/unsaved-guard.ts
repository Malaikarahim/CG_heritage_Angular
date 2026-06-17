import { CanDeactivateFn } from '@angular/router';
import { Profile } from './profile';

export const unsavedGuard: CanDeactivateFn<Profile> = (component) => {

  if (component.dirty) {
    return confirm('You have unsaved changes. Leave page?');
  }

  return true;

};