import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class courseSubjectRegistration1661412769135
  implements MigrationInterface
{
  private table = new Table({
    name: 'courseSubjectRegistration',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'courseId',
        type: 'integer',
        isNullable: false,
      },
      {
        name: 'subjectId',
        type: 'integer',
        isNullable: false,
      },
      {
        name: 'created_at',
        type: 'timestamptz',
        isNullable: false,
        default: 'now()',
      },
      {
        name: 'updated_at',
        type: 'timestamptz',
        isNullable: false,
        default: 'now()',
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table);
    await queryRunner.createForeignKey(
      'courseSubjectRegistration',
      new TableForeignKey({
        columnNames: ['subjectId'],
        referencedTableName: 'subject',
        referencedColumnNames: ['id'],
      }),
    );
    await queryRunner.createForeignKey(
      'courseSubjectRegistration',
      new TableForeignKey({
        columnNames: ['courseId'],
        referencedTableName: 'course',
        referencedColumnNames: ['id'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
  }
}
