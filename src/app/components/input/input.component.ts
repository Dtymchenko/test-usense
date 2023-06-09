import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})
export class InputComponent {
  ngOnInit() {
    this.checkPasswordStrength('');
  }

  checkPasswordStrength(password: string) {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
      section.classList.remove('gray', 'red', 'yellow', 'green');
      section.classList.add('gray');
    });

    if (password.length === 0) {
      return;
    }

    if (password.length < 8) {
      sections.forEach((section) => section.classList.add('red'));
      return;
    }

    const hasLetters = /[a-zA-Z]/.test(password);
    const hasDigits = /[0-9]/.test(password);
    const hasSymbols = /[!@#$%^&_*()]/.test(password);

    if (hasLetters && hasDigits && hasSymbols) {
      sections.forEach((section) => {
        section.classList.remove('gray', 'red', 'yellow', 'green');
        section.classList.add('green');
      });
    } else if (
      (hasLetters && hasDigits && !hasSymbols) ||
      (!hasLetters && hasDigits && hasSymbols) ||
      (hasLetters && !hasDigits && hasSymbols)
    ) {
      sections.forEach((section) => {
        section.classList.remove('gray', 'red', 'yellow', 'green');
      });
      sections[0].classList.add('yellow');
      sections[1].classList.add('yellow');
    } else {
      sections.forEach((section) => {
        section.classList.remove('gray', 'red', 'yellow', 'green');
      });
      sections[0].classList.add('gray');
    }
  }
}
