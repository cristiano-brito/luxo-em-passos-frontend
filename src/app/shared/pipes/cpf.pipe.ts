import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf',
  standalone: true
})
export class CpfPipe implements PipeTransform {

  transform(value: string | number | undefined | null): string {
    if (!value) {
      return '';
    }

    const cpfLimpo = value.toString().replace(/\D/g, '');

    if (cpfLimpo.length !== 11) {
      return cpfLimpo;
    }

    return cpfLimpo.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }

}
