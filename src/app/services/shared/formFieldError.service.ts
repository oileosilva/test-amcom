import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class FormFieldService {
    constructor() { }

    public getErrorInputMessage(field: FormControl) {
        if (field.hasError('required'))
            return 'Campo obrigatório';

        else if (field.hasError('email'))
            return 'Insira um email válido';

        else if (field.hasError('mask'))
            return 'Formato inválido';

        else if (field.hasError('minlength') || field.hasError('min'))
            return 'Valor menor que o permitido';

        else if (field.hasError('maxlength') || field.hasError('max'))
            return 'Valor maior que o permitido';

        else if (field.hasError('invalidCPF'))
            return 'CPF inválido';
        return '';
    }
}
