import { Command } from './command.interface.js';

export class HelpCommand implements Command {
  public getName(): string {
    return '--help';
  }

  public async execute(..._parameters: string[]): Promise<void> {
    console.info(`
        Program for preparing data for REST API server.
        Example:
            cli.js --<command> [--arguments]
        Commands:
            --version:                   # displays the version number
            --help:                      # prints this text
            --import <path>:             # imports data from TSV
            --generate <n> <path> <url>: # generates a random amount of test data
    `);
  }
}
