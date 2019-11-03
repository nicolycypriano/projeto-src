<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ResidenciaRepository")
 */
class Residencia
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nome;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $logradouro;

    /**
     * @ORM\Column(type="integer")
     */
    private $numero;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Comodo", mappedBy="residencia", orphanRemoval=true)
     */
    private $comodos;

    /**
     * @ORM\Column(type="integer")
     */
    private $proprietario;

    public function __construct() {
        $this->comodos = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNome(): ?string
    {
        return $this->nome;
    }

    public function setNome(string $nome): self
    {
        $this->nome = $nome;

        return $this;
    }

    public function getLogradouro(): ?string
    {
        return $this->logradouro;
    }

    public function setLogradouro(string $logradouro): self
    {
        $this->logradouro = $logradouro;

        return $this;
    }

    public function getNumero(): ?int
    {
        return $this->numero;
    }

    public function setNumero(int $numero): self
    {
        $this->numero = $numero;

        return $this;
    }

    /**
     * @return Collection|Comodo[]
     */
    public function getComodos(): Collection
    {
        return $this->comodos;
    }

    public function addComodo(Comodo $comodo): self
    {
        if (!$this->comodos->contains($comodo)) {
            $this->comodos[] = $comodo;
            $comodo->setResidencia($this);
        }

        return $this;
    }

    public function removeComodo(Comodo $comodo): self
    {
        if ($this->comodos->contains($comodo)) {
            $this->comodos->removeElement($comodo);
            // set the owning side to null (unless already changed)
            if ($comodo->getResidencia() === $this) {
                $comodo->setResidencia(null);
            }
        }

        return $this;
    }

    public function getProprietario(): ?int
    {
        return $this->proprietario;
    }

    public function setProprietario(int $proprietario): self
    {
        $this->proprietario = $proprietario;

        return $this;
    }
}
