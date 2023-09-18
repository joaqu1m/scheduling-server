export default (day: number) => {
    switch (day) {
        case 0:
            return 'Segunda-feira';
        case 1:
            return 'Terça-feira';
        case 2:
            return 'Quarta-feira';
        case 3:
            return 'Quinta-feira';
        case 4:
            return 'Sexta-feira';
        case 5:
            return 'Sábado';
        case 6:
            return 'Domingo';
        default:
            return '';
    }
}