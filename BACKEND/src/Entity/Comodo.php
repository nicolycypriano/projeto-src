<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ComodoRepository")
 */
class Comodo
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\TipoComodo")
     * @ORM\JoinColumn(nullable=false)
     */
    private $tipoComodo;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Sensor", mappedBy="comodo")
     */
    private $sensor;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Atuador", mappedBy="comodo")
     */
    private $atuador;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Residencia", inversedBy="comodos")
     * @ORM\JoinColumn(nullable=false)
     */
    private $residencia;

    public function __construct()
    {
        $this->sensor = new ArrayCollection();
        $this->atuador = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTipoComodo(): ?TipoComodo
    {
        return $this->tipoComodo;
    }

    public function setTipoComodo(?TipoComodo $tipoComodo): self
    {
        $this->tipoComodo = $tipoComodo;

        return $this;
    }

    /**
     * @return Collection|Sensor[]
     */
    public function getSensor(): Collection
    {
        return $this->sensor;
    }

    public function addSensor(Sensor $sensor): self
    {
        if (!$this->sensor->contains($sensor)) {
            $this->sensor[] = $sensor;
            $sensor->setComodo($this);
        }

        return $this;
    }

    public function removeSensor(Sensor $sensor): self
    {
        if ($this->sensor->contains($sensor)) {
            $this->sensor->removeElement($sensor);
            // set the owning side to null (unless already changed)
            if ($sensor->getComodo() === $this) {
                $sensor->setComodo(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Atuador[]
     */
    public function getAtuador(): Collection
    {
        return $this->atuador;
    }

    public function addAtuador(Atuador $atuador): self
    {
        if (!$this->atuador->contains($atuador)) {
            $this->atuador[] = $atuador;
            $atuador->setComodo($this);
        }

        return $this;
    }

    public function removeAtuador(Atuador $atuador): self
    {
        if ($this->atuador->contains($atuador)) {
            $this->atuador->removeElement($atuador);
            // set the owning side to null (unless already changed)
            if ($atuador->getComodo() === $this) {
                $atuador->setComodo(null);
            }
        }

        return $this;
    }

    public function getResidencia(): ?Residencia
    {
        return $this->residencia;
    }

    public function setResidencia(?Residencia $residencia): self
    {
        $this->residencia = $residencia;

        return $this;
    }
}
