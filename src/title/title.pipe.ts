import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'title'
})
export class TitlePipe implements PipeTransform {
    // albo
    // public transform(input: string): string {
    //     if (!input) {
    //         return '';
    //     } else {
    //         return input.replace(/\w\S*/g, (txt => txt[0].toUpperCase() + txt.substr(1).toLowerCase() ));
    //     }
    // }
    
    // albo
    transform(value: string): string {
        return value // = 'to JEST dRaMaT'
            .split(' ') // = ['to', 'JEST', 'dRaMaT']
            .map(word => {
                const first = word.charAt(0).toUpperCase(); // = 'dRaMaT' --> 'D'
                const rest = word.slice(1).toLowerCase(); // = 'dRaMaT' --> 'RaMaT' --> 'ramat'
                return first + rest; // = 'Dramat'
            }) // = ['To', 'Jest', 'Dramat']
            .join(' '); // = 'To Jest Dramat'
    }

}
