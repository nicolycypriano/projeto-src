<?php


namespace App\Controller;


use App\Entity\Residencia;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/residencia")
 */
class ResidenciaController extends AbstractController
{
    /**
     * @Route("/create", name="residencia-create", methods={"POST"})
     */
    public function create(Request $request)
    {
        $nome = $request->get('nome');
        $logradouro = $request->get('logradouro');
        $numero = $request->get('numero');
//        $proprietario = $request->get('proprietario');
        $proprietario = 1;

        $residencia = new Residencia();
        $residencia->setNome($nome);
        $residencia->setLogradouro($logradouro);
        $residencia->setNumero($numero);
        $residencia->setProprietario($proprietario);

        $this->getDoctrine()->getManager()->persist($residencia);
        $this->getDoctrine()->getManager()->flush();

        return new JsonResponse('Residência criada com sucesso!');
    }

    /**
     * @Route("/edit/{id}", name="residencia-edit", methods={"POST"})
     */
    public function edit($id, Request $request)
    {
        $nome = $request->get('nome');
        $logradouro = $request->get('logradouro');
        $numero = $request->get('numero');

        $residencia = $this->getDoctrine()->getRepository(Residencia::class)->find($id);

        if ($residencia == null) {
            return new JsonResponse('Desculpe, mas essa residência não existe.');
        }

        $residencia->setNome($nome);
        $residencia->setLogradouro($logradouro);
        $residencia->setNumero($numero);

        $this->getDoctrine()->getManager()->merge($residencia);
        $this->getDoctrine()->getManager()->flush();

        return new JsonResponse('Residência editada com sucesso!');
    }

    /**
     * @Route("/remove/{id}", name="residencia-remove", methods={"POST"})
     */
    public function remove($id)
    {
        $residencia = $this->getDoctrine()->getRepository(Residencia::class)->find($id);

        if ($residencia == null) {
            return new JsonResponse('Desculpe, mas essa residência não existe.');
        }

        $this->getDoctrine()->getManager()->remove($residencia);
        $this->getDoctrine()->getManager()->flush();

        return new JsonResponse('Residência removida com sucesso!');
    }
}