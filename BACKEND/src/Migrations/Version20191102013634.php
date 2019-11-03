<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20191102013634 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql("INSERT INTO tipo_comodo VALUES (1, 'Quarto')");
        $this->addSql("INSERT INTO tipo_comodo VALUES (2, 'Sala de estar')");
        $this->addSql("INSERT INTO tipo_comodo VALUES (3, 'Sala de jantar')");
        $this->addSql("INSERT INTO tipo_comodo VALUES (4, 'Corredor')");
        $this->addSql("INSERT INTO tipo_comodo VALUES (5, 'Cozinha')");
        $this->addSql("INSERT INTO tipo_comodo VALUES (6, 'Banheiro')");
        $this->addSql("INSERT INTO tipo_comodo VALUES (7, 'Sacada')");
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('CREATE SCHEMA public');
    }
}
