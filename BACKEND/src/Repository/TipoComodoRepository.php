<?php

namespace App\Repository;

use App\Entity\TipoComodo;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method TipoComodo|null find($id, $lockMode = null, $lockVersion = null)
 * @method TipoComodo|null findOneBy(array $criteria, array $orderBy = null)
 * @method TipoComodo[]    findAll()
 * @method TipoComodo[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TipoComodoRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TipoComodo::class);
    }

    public function buscarTodos()
    {
        return $this->createQueryBuilder('t')
            ->orderBy('t.id', 'ASC')
            ->getQuery();
    }

    // /**
    //  * @return TipoComodo[] Returns an array of TipoComodo objects
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
    public function findOneBySomeField($value): ?TipoComodo
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
