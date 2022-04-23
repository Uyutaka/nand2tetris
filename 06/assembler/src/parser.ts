import { CommandType } from "./command-type";
import * as fs from 'fs';

export class Parser {
    private asm: string[] = [];
    private line = 0; // initial line is 0, so no command there
    private cmd: string = '';
    constructor(private readonly filePath: string) {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) throw err;
            const row = data.split(/[\r\n]+/);

            // Remove comments & spaces
            row.forEach((line) => {
                const removeSpace = line.replace(/ /g, '');
                if (removeSpace[0] === '/' && removeSpace[1] === '/') {
                } else {
                    this.asm.push(removeSpace);
                }
            })
        })
    }

    hasMoreCommands(): boolean {
        // Check if line ended
        if (this.asm.length < this.line) {
            return false;
        }

        // Check if line is the last
        if (this.line === this.asm.length) {
            if (typeof this.asm[this.line] !== 'string') {
                return false;
            }
        }
        return true;
    }

    advance() {
        this.line++;
        if (this.hasMoreCommands()) {
            this.cmd = this.asm[this.line];
        }

    }

    commandType(): CommandType {
        // @xxx
        if (this.cmd[0] === '@') {
            return CommandType.A_COMMAND;
        }

        // (xxx)
        if (this.cmd[0] === '(' && this.cmd[this.cmd.length - 1] === ')') {
            return CommandType.L_COMMAND;
        }

        // Others
        return CommandType.C_COMMAND;
    }

    // Used for A_COMMAND or L_COMMAND
    // Extract xxx from @xxx / (xxx)
    symbol(): string {
        switch (this.commandType()) {
            case CommandType.A_COMMAND:
                return this.cmd.substring(1, this.cmd.length);
            case CommandType.L_COMMAND:
                return this.cmd.substring(1, this.cmd.length - 1);
            default:
                throw new Error("Neither A or L command");
        }
    }

    dest(): string {
        if (this.cmd.includes('=')) {
            const index = this.cmd.indexOf('=');
            return this.cmd.substring(0, index);
        }

        if (this.cmd.includes(';')) {
            const index = this.cmd.indexOf(';');
            return this.cmd.substring(0, index);
        }
        return "";
    }

    comp(): string {
        if (this.cmd.includes('=')) {
            const index = this.cmd.indexOf('=');
            return this.cmd.substring(index + 1, this.cmd.length);
        }
        return "";
    }

    jump(): string {
        if (this.cmd.includes(';')) {
            const index = this.cmd.indexOf(';');
            return this.cmd.substring(index + 1, this.cmd.length);
        }
        return "";
    }
}
