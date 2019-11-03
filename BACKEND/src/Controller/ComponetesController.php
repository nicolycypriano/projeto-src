<?php


namespace App\Controller;

use App\Entity\TipoAtuador;
use App\Entity\TipoComodo;
use App\Entity\TipoSensor;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/componentes")
 */
class ComponetesController extends AbstractController
{
    /**
     * @Route("/", name="busca-todos-componentes", methods={"GET"})
     */
    public function buscaTodosComponentes()
    {
        $tipoComodo = $this->getDoctrine()->getRepository(TipoComodo::class)->buscarTodos()->getArrayResult();
        $tipoSensor = $this->getDoctrine()->getRepository(TipoSensor::class)->buscarTodos()->getArrayResult();
        $tipoAtuador = $this->getDoctrine()->getRepository(TipoAtuador::class)->buscarTodos()->getArrayResult();

        return new JsonResponse(['tipoComodo' => $tipoComodo, 'tipoSensor' => $tipoSensor, 'tipoAtuador' => $tipoAtuador]);
    }
}