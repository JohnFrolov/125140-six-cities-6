import { Command } from './command.interface.js';

export class VersionCommand implements Command {
  public getName(): string {
    return '--version';
  }

  public async execute(..._parameters: string[]): Promise<void> {
    console.info('version: Not implemented yet');
  }
}
