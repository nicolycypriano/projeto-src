<?php


namespace App\Controller;


use App\Entity\Comodo;
use App\Entity\Residencia;
use App\Entity\TipoComodo;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/comodo")
 */
class ComodoController extends AbstractController
{
    /**
     * @Route("/create", name="comodo-create", methods={"POST"})
     */
    public function create(Request $request)
    {
        $residenciaId = $request->get('residencia');
        $tipoComodoId = $request->get('tipoComodo');

        $residencia = $this->getDoctrine()->getRepository(Residencia::class)->find($residenciaId);

        if ($residencia == null) {
            return new JsonResponse('Desculpe, mas você está tentando criar um cômodo para uma residência que não existe.');
        }

        $tipoComodo = $this->getDoctrine()->getRepository(TipoComodo::class)->find($tipoComodoId);

        if ($residencia == null) {
            return new JsonResponse('Desculpe, mas você está tentando criar um cômodo com um tipo de cômodo que não existe.');
        }

        $comodo = new Comodo();
        $comodo->setResidencia($residencia);
        $comodo->setTipoComodo($tipoComodo);

        $this->getDoctrine()->getManager()->persist($comodo);
        $this->getDoctrine()->getManager()->flush();

        return new JsonResponse('Cômodo criado com sucesso!');
    }

    /**
     * @Route("/edit/{id}", name="comodo-edit", methods={"POST"})
     */
    public function edit($id, Request $request)
    {
        $residenciaId = $request->get('residencia');
        $tipoComodoId = $request->get('tipoComodo');

        $comodo = $this->getDoctrine()->getRepository(Comodo::class)->find($id);

        if ($comodo == null) {
            return new JsonResponse('Desculpe, mas você está tentando editar um cômodo que não existe.');
        }

        $residencia = $this->getDoctrine()->getRepository(Residencia::class)->find($residenciaId);

        if ($residencia == null) {
            return new JsonResponse('Desculpe, mas você está tentando editar um cômodo para uma residência que não existe.');
        }

        $tipoComodo = $this->getDoctrine()->getRepository(TipoComodo::class)->find($tipoComodoId);

        if ($residencia == null) {
            return new JsonResponse('Desculpe, mas você está tentando editar um cômodo com um tipo de cômodo que não existe.');
        }

        $comodo->setResidencia($residencia);
        $comodo->setTipoComodo($tipoComodo);

        $this->getDoctrine()->getManager()->merge($comodo);
        $this->getDoctrine()->getManager()->flush();

        return new JsonResponse('Cômodo editado com sucesso!');
    }

    /**
     * @Route("/remove/{id}", name="comodo-remove", methods={"POST"})
     */
    public function remove($id)
    {
        $comodo = $this->getDoctrine()->getRepository(Comodo::class)->find($id);

        if ($comodo == null) {
            return new JsonResponse('Desculpe, mas esse cômodo não existe.');
        }

        $this->getDoctrine()->getManager()->remove($comodo);
        $this->getDoctrine()->getManager()->flush();

        return new JsonResponse('Cômodo removido com sucesso!');
    }
}