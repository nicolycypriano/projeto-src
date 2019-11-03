<?php


namespace App\Business;

use App\Entity\Sensor;
use App\Entity\TipoSensor;
use Doctrine\ORM\EntityManagerInterface;

class SensorBusiness
{
    private $em;

    public function __construct(EntityManagerInterface $manager)
    {
        $this->em = $manager;
    }

    public function modificarValor(Sensor $sensor) {

        $mensagem = "";

        $tipoSensor = $this->em->getRepository(TipoSensor::class)->find($sensor->getTipoSensor());

        if ($tipoSensor->getCategoria() == 'Temperatura') {

            $sensor->setValor(rand(0, 50));
            $this->em->merge($sensor);
            $mensagem = "Valor do sensor alterado para " . $sensor->getValor() . "°C";

        } elseif ($tipoSensor->getCategoria() == 'Presença') {

            $sensor->setValor(!$sensor->getValor());
            $this->em->merge($sensor);
            $mensagem = "Valor do sensor alterado para" . $sensor->getValor();

        } elseif ($tipoSensor->getCategoria() == 'Abertura') {

            $sensor->setValor(!$sensor->getValor());
            $this->em->merge($sensor);
            $mensagem = "Valor do sensor alterado para" . $sensor->getValor();
        }

        $this->em->flush();
        return $mensagem;
    }
}