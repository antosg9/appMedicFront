import { Component } from '@angular/core';
import { SignalementService } from '../../../services/Signalement/signalement.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-add-signalement',
  templateUrl: './add-signalement.component.html',
  styleUrls: ['./add-signalement.component.css'],
})
export class AddSignalementComponent {
  signalementForm!: FormGroup;

  constructor(
    private signalementService: SignalementService,
    private formBuilder: FormBuilder,
    public auth: AuthService,
  ) {
    this.initializeForm();
  }

  initializeForm(): void {
    this.signalementForm = this.formBuilder.group({
      code_cip: ['', Validators.required],
    });
  }

  validateCodeCIP(value: string): boolean {
    return (
      /^[0-9]+$/.test(value) && (value.length === 7 || value.length === 13)
    );
  }

  onSubmit(): void {
    const codeCIP = this.signalementForm.get('code_cip')!.value;
    if (!this.validateCodeCIP(codeCIP)) {
      alert('Le code CIP doit être composé de 7 ou 13 chiffres uniquement.');
      return;
    }
    if (this.signalementForm.valid) {
      this.auth.user$.subscribe((user) => {
        if (user) {
          const pseudo = user.name;

          const signalementData = {
            ...this.signalementForm.value,
            pseudo: pseudo,
          };

          this.signalementService.createSignalement(signalementData).subscribe({
            next: (res) => {
              console.log('Signalement créé', res);
              this.signalementForm.reset();
            },
            error: (err) => {
              console.error('Erreur lors de la création du signalement', err);
              console.error("Détails de l'erreur:", err.error);
              alert(
                'Erreur lors de la création du signalement: ' +
                  err.error.message,
              );
            },
          });
        }
      });
    }
  }
}
