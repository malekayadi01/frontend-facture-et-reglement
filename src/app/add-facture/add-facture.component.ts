import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Import Router

import { factureService } from '../facture.service';

@Component({
  selector: 'app-add-facture',
  templateUrl: './add-facture.component.html',
  styleUrls: ['./add-facture.component.css']
})
export class AddFactureComponent {
  nouvelleFacture: any = {}; // Modèle pour stocker les données du formulaire

  constructor(private factureService: factureService, private router: Router) {}

  ajouterFacture(): void {
    this.factureService.addFacture(this.nouvelleFacture)
      .subscribe(
        facture => {
          console.log('Facture ajoutée avec succès:', facture);
          // Navigating back to the facture list component
          this.router.navigate(['/factures']);
        },
        error => {
          console.error('Erreur lors de l\'ajout de la facture:', error);
        }
      );
  }
}
