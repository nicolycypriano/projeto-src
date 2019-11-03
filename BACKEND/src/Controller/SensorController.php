<?php


namespace App\Controller;


use App\Business\SensorBusiness;
use App\Entity\Comodo;
use App\Entity\Sensor;
use App\Entity\TipoSensor;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/sensor")
 */
class SensorController extends AbstractController
{
    /**
     * @Route("/create", name="sensor-create", methods={"POST"})
     */
    public function create(Request $request)
    {
        $comodoId = $request->get('comodo');
        $tipoSensorId = $request->get('tipoSensor');
        $nome = $request->get('nome');
        $valor = 0;

        $comodo = $this->getDoctrine()->getRepository(Comodo::class)->find($comodoId);

        if ($comodo == null) {
            return new JsonResponse('Desculpe, mas você está tentando criar um sensor para um cômodo que não existe.');
        }

        $tipoSensor = $this->getDoctrine()->getRepository(TipoSensor::class)->find($tipoSensorId);

        if ($tipoSensor == null) {
            return new JsonResponse('Desculpe, mas você está tentando criar um sensor com um tipo de sensor que não existe.');
        }

        $sensor = new Sensor();
        $sensor->setComodo($comodo);
        $sensor->setTipoSensor($tipoSensor);
        $sensor->setValor($valor);
        $sensor->setNome($nome);

        $this->getDoctrine()->getManager()->persist($sensor);
        $this->getDoctrine()->getManager()->flush();

        return new JsonResponse('Sensor criado com sucesso!');
    }

    /**
     * @Route("/edit/{id}", name="sensor-edit", methods={"POST"})
     */
    public function edit($id, Request $request)
    {
        $comodoId = $request->get('comodo');
        $tipoSensorId = $request->get('tipoSensor');
        $nome = $request->get('nome');
        $valor = 0;

        $sensor = $this->getDoctrine()->getRepository(Sensor::class)->find($id);

        if ($sensor == null) {
            return new JsonResponse('Desculpe, mas você está tentando editar um sensor que não existe.');
        }

        $comodo = $this->getDoctrine()->getRepository(Comodo::class)->find($comodoId);

        if ($comodo == null) {
            return new JsonResponse('Desculpe, mas você está tentando editar um atuador para um cômodo que não existe.');
        }

        $tipoSensor = $this->getDoctrine()->getRepository(TipoSensor::class)->find($tipoSensorId);

        if ($tipoSensor == null) {
            return new JsonResponse('Desculpe, mas você está tentando editar um sensor para uma tipo de sensor que não existe.');
        }

        $sensor->setComodo($comodo);
        $sensor->setTipoSensor($tipoSensor);
        $sensor->setValor($valor);
        $sensor->setNome($nome);

        $this->getDoctrine()->getManager()->merge($sensor);
        $this->getDoctrine()->getManager()->flush();

        return new JsonResponse('Sensor editado com sucesso!');
    }

    /**
     * @Route("/remove/{id}", name="sensor-remove", methods={"POST"})
     */
    public function remove($id)
    {
        $sensor = $this->getDoctrine()->getRepository(Sensor::class)->find($id);

        if ($sensor == null) {
            return new JsonResponse('Desculpe, mas esse sensor não existe.');
        }

        $this->getDoctrine()->getManager()->remove($sensor);
        $this->getDoctrine()->getManager()->flush();

        return new JsonResponse('Sensor removido com sucesso!');
    }

    /**
     * @Route("/acionar/{id}", name="acionar-sensor", methods={"POST"})
     */
    public function acionar($id, SensorBusiness $sensorBusiness)
    {
        $sensor = $this->getDoctrine()->getRepository(Sensor::class)->find($id);

        if ($sensor == null) {
            return new JsonResponse('Desculpe, mas você está tentando acionar um sensor que não existe.');
        }

        $mensagem = $sensorBusiness->modificarValor($sensor);

        return new JsonResponse($mensagem);
    }
}