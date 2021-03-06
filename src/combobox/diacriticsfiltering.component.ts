/**
 * ComboBox Diacritics Filtering Sample
 */
import { Component } from '@angular/core';

@Component({
    selector: 'control-content',
    templateUrl: 'diacriticsfiltering.html'
})
export class DiacriticsFilteringComboBoxComponent {
    // create local data
    public data: string[] = [
        'Aeróbics',
        'Aeróbics en Agua',
        'Aerografía',
        'Aeromodelaje',
        'Águilas',
        'Ajedrez',
        'Ala Delta',
        'Álbumes de Música',
        'Alusivos',
        'Análisis de Escritura a Mano'];
}