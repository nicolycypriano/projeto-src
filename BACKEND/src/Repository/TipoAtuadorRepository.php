<?php

namespace App\Repository;

use App\Entity\TipoAtuador;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method TipoAtuador|null find($id, $lockMode = null, $lockVersion = null)
 * @method TipoAtuador|null findOneBy(array $criteria, array $orderBy = null)
 * @method TipoAtuador[]    findAll()
 * @method TipoAtuador[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TipoAtuadorRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TipoAtuador::class);
    }

    public function buscarTodos()
    {
        return $this->createQueryBuilder('t')
            ->orderBy('t.id', 'ASC')
            ->getQuery();
    }

    // /**
    //  * @return TipoAtuador[] Returns an array of TipoAtuador objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('t.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?TipoAtuador
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
