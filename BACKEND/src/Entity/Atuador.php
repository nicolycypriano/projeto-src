<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\AtuadorRepository")
 */
class Atuador
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\TipoAtuador")
     * @ORM\JoinColumn(nullable=false)
     */
    private $tipoAtuador;

    /**
     * @ORM\Column(type="boolean")
     */
    private $valor;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Comodo", inversedBy="atuador")
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

    public function getTipoAtuador(): ?TipoAtuador
    {
        return $this->tipoAtuador;
    }

    public function setTipoAtuador(?TipoAtuador $tipoAtuador): self
    {
        $this->tipoAtuador = $tipoAtuador;

        return $this;
    }

    public function getValor(): ?bool
    {
        return $this->valor;
    }

    public function setValor(bool $valor): self
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
