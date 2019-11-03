<?php


namespace App\Controller;


use App\Entity\Atuador;
use App\Entity\Comodo;
use App\Entity\TipoAtuador;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/atuador")
 */
class AtuadorController extends AbstractController
{
    /**
     * @Route("/create", name="atuador-create", methods={"POST"})
     */
    public function create(Request $request)
    {
        $comodoId = $request->get('comodo');
        $tipoAtuadorId = $request->get('tipoAtuador');
        $nome = $request->get('nome');
        $valor = false;

        $comodo = $this->getDoctrine()->getRepository(Comodo::class)->find($comodoId);

        if ($comodo == null) {
            return new JsonResponse('Desculpe, mas você está tentando criar um atuador para um cômodo que não existe.');
        }

        $tipoAtuador = $this->getDoctrine()->getRepository(TipoAtuador::class)->find($tipoAtuadorId);

        if ($tipoAtuador == null) {
            return new JsonResponse('Desculpe, mas você está tentando criar um atuador com um tipo de atuador que não existe.');
        }

        $atuador = new Atuador();
        $atuador->setComodo($comodo);
        $atuador->setTipoAtuador($tipoAtuador);
        $atuador->setValor($valor);
        $atuador->setNome($nome);

        $this->getDoctrine()->getManager()->persist($atuador);
        $this->getDoctrine()->getManager()->flush();

        return new JsonResponse('Atuador criado com sucesso!');
    }

    /**
     * @Route("/edit/{id}", name="atuador-edit", methods={"POST"})
     */
    public function edit($id, Request $request)
    {
        $comodoId = $request->get('comodo');
        $tipoAtuadorId = $request->get('tipoAtuador');
        $nome = $request->get('nome');
        $valor = false;

        $atuador = $this->getDoctrine()->getRepository(Atuador::class)->find($id);

        if ($atuador == null) {
            return new JsonResponse('Desculpe, mas você está tentando editar um atuador que não existe.');
        }

        $comodo = $this->getDoctrine()->getRepository(Comodo::class)->find($comodoId);

        if ($comodo == null) {
            return new JsonResponse('Desculpe, mas você está tentando editar um atuador para um cômodo que não existe.');
        }

        $tipoAtuador = $this->getDoctrine()->getRepository(TipoAtuador::class)->find($tipoAtuadorId);

        if ($tipoAtuador == null) {
            return new JsonResponse('Desculpe, mas você está tentando editar um atuador para uma tipo de atuador que não existe.');
        }

        $atuador->setComodo($comodo);
        $atuador->setTipoAtuador($tipoAtuador);
        $atuador->setValor($valor);
        $atuador->setNome($nome);

        $this->getDoctrine()->getManager()->merge($atuador);
        $this->getDoctrine()->getManager()->flush();

        return new JsonResponse('Atuador editado com sucesso!');
    }

    /**
     * @Route("/remove/{id}", name="atuador-remove", methods={"POST"})
     */
    public function remove($id)
    {
        $atuador = $this->getDoctrine()->getRepository(Atuador::class)->find($id);

        if ($atuador == null) {
            return new JsonResponse('Desculpe, mas esse atuador não existe.');
        }

        $this->getDoctrine()->getManager()->remove($atuador);
        $this->getDoctrine()->getManager()->flush();

        return new JsonResponse('Atuador removido com sucesso!');
    }

    /**
     * @Route("/movimentar/{id}", name="movimentar-atuador", methods={"POST"})
     */
    public function movimentar($id)
    {
        $atuador = $this->getDoctrine()->getRepository(Atuador::class)->find($id);

        if ($atuador == null) {
            return new JsonResponse('Desculpe, mas você está tentando movimentar um atuador que não existe.');
        }

        $atuador->setValor(!$atuador->getValor());

        $this->getDoctrine()->getManager()->merge($atuador);
        $this->getDoctrine()->getManager()->flush();

        return new JsonResponse('Atuador movimentado!');
    }
}