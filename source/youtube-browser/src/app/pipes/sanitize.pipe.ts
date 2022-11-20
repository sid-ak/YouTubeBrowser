  import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizeHtml'
})
export class SanitizePipe implements PipeTransform {

  constructor(private readonly domSanitizer: DomSanitizer) {}

  transform(value?: string, ...args: unknown[]): SafeHtml | null {
    if (value === null || value === undefined) return null;
    return this.domSanitizer.bypassSecurityTrustHtml(value);
  }

}
