<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20191102002523 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('CREATE SEQUENCE atuador_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE comodo_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE residencia_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE sensor_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE tipo_atuador_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE tipo_comodo_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE tipo_sensor_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE atuador (id INT NOT NULL, tipo_atuador_id INT NOT NULL, comodo_id INT NOT NULL, valor BOOLEAN NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_81062CA5F8269689 ON atuador (tipo_atuador_id)');
        $this->addSql('CREATE INDEX IDX_81062CA5F18A188 ON atuador (comodo_id)');
        $this->addSql('CREATE TABLE comodo (id INT NOT NULL, tipo_comodo_id INT NOT NULL, residencia_id INT NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_729B4D62ED761EC6 ON comodo (tipo_comodo_id)');
        $this->addSql('CREATE INDEX IDX_729B4D626DCA225E ON comodo (residencia_id)');
        $this->addSql('CREATE TABLE residencia (id INT NOT NULL, nome VARCHAR(255) NOT NULL, logradouro VARCHAR(255) NOT NULL, numero INT NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE sensor (id INT NOT NULL, tipo_sensor_id INT NOT NULL, comodo_id INT NOT NULL, valor DOUBLE PRECISION NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_BC8617B040292651 ON sensor (tipo_sensor_id)');
        $this->addSql('CREATE INDEX IDX_BC8617B0F18A188 ON sensor (comodo_id)');
        $this->addSql('CREATE TABLE tipo_atuador (id INT NOT NULL, categoria VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE tipo_comodo (id INT NOT NULL, nome VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE tipo_sensor (id INT NOT NULL, categoria VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('ALTER TABLE atuador ADD CONSTRAINT FK_81062CA5F8269689 FOREIGN KEY (tipo_atuador_id) REFERENCES tipo_atuador (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE atuador ADD CONSTRAINT FK_81062CA5F18A188 FOREIGN KEY (comodo_id) REFERENCES comodo (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE comodo ADD CONSTRAINT FK_729B4D62ED761EC6 FOREIGN KEY (tipo_comodo_id) REFERENCES tipo_comodo (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE comodo ADD CONSTRAINT FK_729B4D626DCA225E FOREIGN KEY (residencia_id) REFERENCES residencia (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE sensor ADD CONSTRAINT FK_BC8617B040292651 FOREIGN KEY (tipo_sensor_id) REFERENCES tipo_sensor (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE sensor ADD CONSTRAINT FK_BC8617B0F18A188 FOREIGN KEY (comodo_id) REFERENCES comodo (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE atuador DROP CONSTRAINT FK_81062CA5F18A188');
        $this->addSql('ALTER TABLE sensor DROP CONSTRAINT FK_BC8617B0F18A188');
        $this->addSql('ALTER TABLE comodo DROP CONSTRAINT FK_729B4D626DCA225E');
        $this->addSql('ALTER TABLE atuador DROP CONSTRAINT FK_81062CA5F8269689');
        $this->addSql('ALTER TABLE comodo DROP CONSTRAINT FK_729B4D62ED761EC6');
        $this->addSql('ALTER TABLE sensor DROP CONSTRAINT FK_BC8617B040292651');
        $this->addSql('DROP SEQUENCE atuador_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE comodo_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE residencia_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE sensor_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE tipo_atuador_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE tipo_comodo_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE tipo_sensor_id_seq CASCADE');
        $this->addSql('DROP TABLE atuador');
        $this->addSql('DROP TABLE comodo');
        $this->addSql('DROP TABLE residencia');
        $this->addSql('DROP TABLE sensor');
        $this->addSql('DROP TABLE tipo_atuador');
        $this->addSql('DROP TABLE tipo_comodo');
        $this->addSql('DROP TABLE tipo_sensor');
    }
}
