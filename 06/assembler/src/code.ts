export class Code {
    dest(value: string) {
        switch (value) {
            case "":
                return "000";
            case "M":
                return "001";
            case "D":
                return "010";
            case "MD":
                return "011";
            case "A":
                return "100";
            case "AM":
                return "101";
            case "AD":
                return "110";
            case "AMD":
                return "111";
            default:
                throw Error("Not match dest!");
        }
    }

    comp(value: string) {
        const A0_HARMONIC = [
            '0',
            '1',
            '-1',
            'D',
            'A',
            '!D',
            '!A',
            '-D',
            '-A',
            'D+1',
            'A+1',
            'D-1',
            'A-1',
            'D+A',
            'D-A',
            'A-D',
            'D&A',
            'D|A'];
        const A0_BIT = [
            '0101010',
            '0111111',
            '0111010',
            '0001100',
            '0110000',
            '0001101',
            '0110001',
            '0001111',
            '0110011',
            '0011111',
            '0110111',
            '0001110',
            '0110010',
            '0000010',
            '0010011',
            '0000111',
            '0000000',
            '0010101'];
        const A1_HARMONIC = [
            'M',
            '!M',
            '-M',
            'M+1',
            'M-1',
            'D+M',
            'D-M',
            'M-D',
            'D&M',
            'D|M',];
        const A1_BIT = [
            '1110000',
            '1110001',
            '1110011',
            '1110111',
            '1110010',
            '1000010',
            '1010011',
            '1000111',
            '1000000',
            '1010101'];
        if (A0_HARMONIC.includes(value)) {
            const index = A0_HARMONIC.indexOf(value);
            return A0_BIT[index];
        }

        if (A1_HARMONIC.includes(value)) {
            const index = A1_HARMONIC.indexOf(value);
            return A1_BIT[index];
        }

        throw Error("Not valid harmonic");
    }

    jump(value: string) {
        switch (value) {
            case "":
                return "000";
            case "JGT":
                return "001";
            case "JEQ":
                return "010";
            case "JGE":
                return "011";
            case "JLT":
                return "100";
            case "JNE":
                return "101";
            case "JLE":
                return "110";
            case "JMP":
                return "111";
            default:
                throw Error("Not match dest!");
        }
    }
}
