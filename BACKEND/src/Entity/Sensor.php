<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\SensorRepository")
 */
class Sensor
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\TipoSensor")
     * @ORM\JoinColumn(nullable=false)
     */
    private $tipoSensor;

    /**
     * @ORM\Column(type="float")
     */
    private $valor;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Comodo", inversedBy="sensor")
     * @ORM\JoinColumn(nullable=false)
     */
    private $comodo;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $nome;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTipoSensor(): ?TipoSensor
    {
        return $this->tipoSensor;
    }

    public function setTipoSensor(?TipoSensor $tipoSensor): self
    {
        $this->tipoSensor = $tipoSensor;

        return $this;
    }

    public function getValor(): ?float
    {
        return $this->valor;
    }

    public function setValor(float $valor): self
    {
        $this->valor = $valor;

        return $this;
    }

    public function getComodo(): ?Comodo
    {
        return $this->comodo;
    }

    public function setComodo(?Comodo $comodo): self
    {
        $this->comodo = $comodo;

        return $this;
    }

    public function getNome(): ?string
    {
        return $this->nome;
    }

    public function setNome(?string $nome): self
    {
        $this->nome = $nome;

        return $this;
    }
}
