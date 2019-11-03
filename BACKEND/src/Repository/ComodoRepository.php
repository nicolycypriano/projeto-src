<?php

namespace App\Repository;

use App\Entity\Comodo;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Comodo|null find($id, $lockMode = null, $lockVersion = null)
 * @method Comodo|null findOneBy(array $criteria, array $orderBy = null)
 * @method Comodo[]    findAll()
 * @method Comodo[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ComodoRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Comodo::class);
    }

    // /**
    //  * @return Comodo[] Returns an array of Comodo objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Comodo
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
