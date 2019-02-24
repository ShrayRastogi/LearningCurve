import { FormControl } from '@angular/forms';

export function passwordValidator(control: FormControl) {
  if (control.value && control.value.toString().indexOf('@') < 0) {
    return { requiredCharacters: true };
  }

  return null;
}
