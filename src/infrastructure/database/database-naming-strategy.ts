import { DefaultNamingStrategy, NamingStrategyInterface, Table } from 'typeorm';

export const identifierLengthLimit = 63; // bytes, aka number of characters; details: www.postgresql.org/docs/current/limits.html

export class DatabaseNamingStrategy extends DefaultNamingStrategy implements NamingStrategyInterface {
  private joinColumns(columnNames: string[]): string {
    return columnNames.join('_');
  }

  private getPartialIndexNameSuffix(tableOrName: Table | string, columnNames: string[], where: string): string {
    const whereClauseMap: Record<string, string> = {
      '"deletedAt" IS NULL': `deletedAt_IS_NULL`,
    };

    if (whereClauseMap[where]) {
      return `WHERE_${whereClauseMap[where]}`;
    }

    const generatedIndexName = super.indexName(tableOrName, columnNames, where);
    const { 1: hash } = generatedIndexName.split('IDX_');

    return `WHERE_${hash}`;
  }

  primaryKeyName(tableOrName: Table | string, columnNames: string[]): string {
    return `PK_${this.getTableName(tableOrName)}_${this.joinColumns(columnNames)}`.slice(0, identifierLengthLimit);
  }

  foreignKeyName(referencingTableOrName: Table | string, referencingColumnNames: string[], referencedTablePath?: string, referencedColumnNames?: string[]): string {
    const referencingTableName = this.getTableName(referencingTableOrName);

    const referencingReferencedGroup = referencingColumnNames.map((referencingColumn, index) => {
      return `${referencingTableName}_${referencingColumn}_${referencedTablePath}_${referencedColumnNames[index]}`;
    });

    return `FK_${referencingReferencedGroup.join('_')}`.slice(0, identifierLengthLimit);
  }

  indexName(tableOrName: Table | string, columnNames: string[], where?: string): string {
    let indexName = `IDX_${this.getTableName(tableOrName)}_${this.joinColumns(columnNames)}`;

    if (where) {
      const suffix = this.getPartialIndexNameSuffix(tableOrName, columnNames, where);
      indexName = `${indexName}_${suffix}`;
    }

    return indexName.slice(0, identifierLengthLimit);
  }

  uniqueConstraintName(tableOrName: Table | string, columnNames: string[]): string {
    return `UQ_${this.getTableName(tableOrName)}_${this.joinColumns(columnNames)}`.slice(0, identifierLengthLimit);
  }

  public relationConstraintName(tableOrName: Table | string, columnNames: string[], where?: string): string {
    const tableName = this.getTableName(tableOrName);

    let constraintName = `REL_${tableName}_${this.joinColumns(columnNames)}`;

    if (where) {
      const suffix = this.getPartialIndexNameSuffix(tableOrName, columnNames, where);
      constraintName = `${constraintName}_${suffix}`;
    }

    return constraintName.slice(0, identifierLengthLimit);
  }

  defaultConstraintName(tableOrName: Table | string, columnName: string): string {
    const tableName = this.getTableName(tableOrName);

    return `DF_${tableName}_${columnName}`.slice(0, identifierLengthLimit);
  }

  public checkConstraintName(tableOrName: Table | string, expression: string): string {
    const tableName = this.getTableName(tableOrName);

    const constraintName = `CHK_${tableName}_${expression}`;

    return constraintName.slice(0, identifierLengthLimit);
  }

  public exclusionConstraintName(tableOrName: Table | string, expression: string): string {
    const tableName = this.getTableName(tableOrName);

    const constraintName = `XCL_${tableName}_${expression}`;

    return constraintName.slice(0, identifierLengthLimit);
  }
}
